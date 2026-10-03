import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactoBody {
  nombre?: string;
  telefono?: string;
  correo?: string;
  ciudad?: string;
  tipo_interes?: string;
  mensaje?: string;
  autorizo?: boolean;
  turnstile_token?: string;
  honeypot?: string;
  form_loaded_at?: number;
}

Deno.serve(async (req: Request) => {
  // Manejo de preflight CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ ok: false, error: "Método no permitido" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body: ContactoBody = await req.json();

    // 1. FILTRO HONEYPOT: Si el campo señuelo trae contenido, es un bot.
    if (body.honeypot && body.honeypot.trim().length > 0) {
      console.warn("[BOT DETECTADO] Honeypot activado:", body.honeypot);
      // Respondemos con éxito falso para no alertar al bot
      return new Response(
        JSON.stringify({ ok: true, message: "Solicitud recibida" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. FILTRO TIME-TRAP: Un humano tarda más de 2 segundos en enviar el formulario.
    if (body.form_loaded_at && typeof body.form_loaded_at === "number") {
      const timeElapsed = Date.now() - body.form_loaded_at;
      if (timeElapsed < 2000) {
        console.warn(`[BOT DETECTADO] Envío ultra-rápido en ${timeElapsed}ms`);
        return new Response(
          JSON.stringify({ ok: true, message: "Solicitud recibida" }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // 3. VALIDACIÓN CLOUDFLARE TURNSTILE
    const turnstileToken = body.turnstile_token?.trim();
    if (!turnstileToken) {
      return new Response(
        JSON.stringify({ ok: false, error: "Verificación de seguridad obligatoria." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const secretKey = Deno.env.get("TURNSTILE_SECRET_KEY");
    if (!secretKey) {
      console.error("TURNSTILE_SECRET_KEY no configurado en variables de entorno.");
      return new Response(
        JSON.stringify({ ok: false, error: "Error de configuración de seguridad." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const verifyFormData = new FormData();
    verifyFormData.append("secret", secretKey);
    verifyFormData.append("response", turnstileToken);
    const clientIp = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for");
    if (clientIp) {
      verifyFormData.append("remoteip", clientIp.split(",")[0].trim());
    }

    const cfResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: verifyFormData,
    });
    const cfResult = await cfResponse.json();

    if (!cfResult.success) {
      console.warn("[TURNSTILE FALLIDO]:", cfResult["error-codes"]);
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Validación de seguridad fallida. Por favor, recarga la página e intenta de nuevo.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 4. VALIDACIÓN DE CAMPOS DEL NEGOCIO
    const nombre = body.nombre?.trim();
    const telefono = body.telefono?.trim();
    const correo = body.correo?.trim().toLowerCase();
    const ciudad = body.ciudad?.trim();
    const tipo_interes = body.tipo_interes?.trim();
    const mensaje = body.mensaje?.trim();
    const autorizo = Boolean(body.autorizo);

    if (!nombre || nombre.length < 3 || nombre.length > 100) {
      return new Response(
        JSON.stringify({ ok: false, error: "Por favor ingresa un nombre válido (mínimo 3 caracteres)." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verificar formato de teléfono (solo dígitos, entre 7 y 12 dígitos)
    const cleanPhone = telefono?.replace(/\D/g, "") || "";
    if (!cleanPhone || cleanPhone.length < 7 || cleanPhone.length > 12) {
      return new Response(
        JSON.stringify({ ok: false, error: "Por favor ingresa un número de teléfono o celular válido." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verificar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo || !emailRegex.test(correo)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Por favor ingresa un correo electrónico válido." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!ciudad || ciudad.length < 2) {
      return new Response(
        JSON.stringify({ ok: false, error: "Por favor especifica tu ciudad." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!tipo_interes) {
      return new Response(
        JSON.stringify({ ok: false, error: "Por favor selecciona un tipo de interés." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!autorizo) {
      return new Response(
        JSON.stringify({ ok: false, error: "Debes autorizar el tratamiento de datos personales para continuar." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 5. INSERCIÓN SEGURA CON SERVICE_ROLE
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Faltan variables SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
      return new Response(
        JSON.stringify({ ok: false, error: "Error de conexión interna." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    const { error: insertError } = await supabaseAdmin.from("clientes").insert([
      {
        nombre,
        telefono: cleanPhone,
        correo,
        ciudad,
        tipo_interes,
        mensaje: mensaje || null,
        estado: "Nuevo",
        origen: "Página Web",
        procesado: false,
      },
    ]);

    if (insertError) {
      console.error("Error al insertar en clientes:", insertError);
      return new Response(
        JSON.stringify({ ok: false, error: "No se pudo guardar la información. Intenta más tarde." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, message: "¡Solicitud recibida exitosamente!" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Error en submit-contacto:", errorMsg);
    return new Response(
      JSON.stringify({ ok: false, error: "Error interno al procesar la solicitud." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
