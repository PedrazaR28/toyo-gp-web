import LegalLayout from "../components/LegalLayout";
import LEGAL_DATA from "../../data/legalData";
import { Database, UserCheck, KeyRound, ShieldAlert, Clock, CheckCircle2, AlertTriangle, Send } from "lucide-react";

const TOC = [
  { id: "responsable", title: "1. Responsable del Tratamiento" },
  { id: "datos-recopilados", title: "2. Qué Datos Personales Recopilamos" },
  { id: "autorizacion", title: "3. Cómo se Obtiene la Autorización" },
  { id: "finalidades-uso", title: "4. Finalidades y Uso de la Información" },
  { id: "formularios-contacto", title: "5. Datos Enviados Vía Formularios y WhatsApp" },
  { id: "derechos-titular", title: "6. Derechos de los Titulares (Hábeas Data)" },
  { id: "procedimiento-peticiones", title: "7. Procedimiento para Consultas y Rectificaciones" },
  { id: "procedimiento-reclamaciones", title: "8. Procedimiento para Presentar Reclamaciones" },
  { id: "canales-atencion", title: "9. Canales Oficiales de Atención" },
  { id: "medidas-seguridad", title: "10. Medidas de Seguridad de la Información" },
  { id: "conservacion", title: "11. Conservación y Ciclo de Vida de los Datos" },
  { id: "sic-reclamacion", title: "12. Quejas ante la Superintendencia de Industria y Comercio" },
];

export default function TratamientoDatosPage() {
  return (
    <LegalLayout
      pageTitle="Tratamiento de Datos Personales | TOYO GP"
      metaDescription="Manual y Aviso de Tratamiento de Datos Personales de TOYO GP (Toyo Gp Sas). Conoce cómo protegemos tus datos, cómo autorizas su tratamiento y cómo ejercer tus derechos de Hábeas Data conforme a la Ley 1581 de 2012."
      heading="Tratamiento de Datos Personales"
      subtitle="Manual de Políticas y Procedimientos de Hábeas Data"
      toc={TOC}
    >
      {/* Declaración inicial */}
      <div className="border-b border-gray-100 pb-6">
        <p className="text-base text-gray-700 leading-relaxed font-normal">
          En <strong>{LEGAL_DATA.razonSocial}</strong> (en adelante <strong>«{LEGAL_DATA.nombreComercial}»</strong>)
          reconocemos la importancia de la privacidad, la seguridad y el adecuado tratamiento de los datos personales
          de nuestros usuarios, clientes y prospectos comerciales.
        </p>
        <p className="text-sm text-gray-600 mt-3">
          El presente documento constituye el <strong>Manual y Política de Tratamiento de Datos Personales</strong>,
          expedido en cabal cumplimiento de la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto 1074 de 2015</strong>
          y las directrices expedidas por la <strong>Superintendencia de Industria y Comercio (SIC)</strong> en la República de Colombia.
        </p>
      </div>

      {/* 1. Responsable */}
      <section id="responsable" className="space-y-4 pt-4">
        <div className="flex items-center gap-2">
          <Database className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            1. Responsable del Tratamiento de Datos Personales
          </h2>
        </div>
        <p>
          La sociedad responsable del tratamiento, custodia y administración de las bases de datos generadas por el sitio web
          y las actividades comerciales es:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-sm space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-gray-900">Razón Social:</span>
            <span className="text-gray-700">{LEGAL_DATA.razonSocial}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-gray-900">NIT:</span>
            <span className="text-gray-700">{LEGAL_DATA.nit}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-gray-900">Representante Legal:</span>
            <span className="text-gray-700">{LEGAL_DATA.representanteLegal}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-gray-900">Registro Mercantil:</span>
            <span className="text-gray-700">Matrícula N° {LEGAL_DATA.matriculaMercantil} ({LEGAL_DATA.camaraComercio})</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-gray-900">Área Responsable de Atención:</span>
            <span className="text-gray-700">Área de Atención al Cliente y Protección de Datos</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-gray-900">Dirección Sede Principal:</span>
            <span className="text-gray-700">{LEGAL_DATA.direccion}, {LEGAL_DATA.localidad}, {LEGAL_DATA.ciudad}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-gray-900">Correo Electrónico Oficial:</span>
            <a href={`mailto:${LEGAL_DATA.correoContacto}`} className="text-[#D90429] hover:underline font-medium">
              {LEGAL_DATA.correoContacto}
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-semibold text-gray-900">Línea Telefónica y Móvil:</span>
            <span className="text-gray-700">{LEGAL_DATA.telefono}</span>
          </div>
        </div>
      </section>

      {/* 2. Qué datos recopilamos */}
      <section id="datos-recopilados" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          2. Qué Datos Personales Recopila TOYO GP
        </h2>
        <p>
          En el marco del giro ordinario de nuestra actividad consistente en la asesoría, exhibición y comercialización
          de vehículos usados, {LEGAL_DATA.nombreComercial} recolecta únicamente los siguientes datos:
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#D90429] flex-shrink-0 mt-0.5" />
            <span><strong>Datos Generales de Contacto:</strong> Nombre completo, número de teléfono fijo o celular, cuenta activa de WhatsApp, dirección de correo electrónico y ciudad donde se encuentra el interesado.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#D90429] flex-shrink-0 mt-0.5" />
            <span><strong>Datos de Interés Comercial:</strong> Tipo de operación deseada (compra, venta, permuta/retoma como parte de pago, trámites de tránsito) e información sobre el vehículo que se desea adquirir o entregar.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#D90429] flex-shrink-0 mt-0.5" />
            <span><strong>Datos del Automotor (cuando aplique):</strong> Datos públicos y técnicos del vehículo suministrados por el titular (placa, marca, línea, modelo, kilometraje, historial de mantenimientos y peritaje).</span>
          </li>
        </ul>
        <div className="p-3.5 bg-gray-50 rounded-lg text-xs text-gray-600 border border-gray-200">
          <strong>Regla de Principio:</strong> {LEGAL_DATA.nombreComercial} aplica el principio de <em>libertad y necesidad</em>. Solo se solicita la información estrictamente indispensable para establecer contacto comercial eficaz y cotizar los vehículos o trámites requeridos.
        </div>
      </section>

      {/* 3. Autorización */}
      <section id="autorizacion" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <UserCheck className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            3. Cómo se Obtiene la Autorización del Titular
          </h2>
        </div>
        <p>
          El tratamiento de datos personales por parte de {LEGAL_DATA.razonSocial} requiere en todo momento de la
          <strong> autorización previa, expresa e informada</strong> del titular, la cual se obtiene a través de diversos mecanismos:
        </p>
        <div className="grid sm:grid-cols-3 gap-3 text-xs">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1 text-sm">Canal Digital (Web)</span>
            Mediante la marcación obligatoria de la casilla de verificación (checkbox) en nuestros formularios de contacto, donde el usuario declara conocer y aceptar esta política antes de enviar sus datos.
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1 text-sm">Canal WhatsApp</span>
            A través del mensaje inicial voluntario enviado por el usuario al enlace de WhatsApp oficial de TOYO GP, en el cual se le informa de la presente política de datos.
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1 text-sm">Canal Presencial</span>
            Mediante formato escrito o digital de autorización previa diligenciado por el cliente en nuestras salas de exhibición al momento de consignar, cotizar o comprar un vehículo.
          </div>
        </div>
        <p className="text-xs text-gray-500">
          La prueba de la autorización se conserva en nuestros repositorios digitales durante el tiempo que permanezca el tratamiento de la información.
        </p>
      </section>

      {/* 4. Finalidades */}
      <section id="finalidades-uso" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          4. Para Qué se Utilizan los Datos Personales
        </h2>
        <p>
          Los datos personales almacenados en nuestras bases de datos son tratados de manera exclusiva para las siguientes finalidades legítimas:
        </p>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>a) Atención Comercial y Cotizaciones:</strong> Contactar a la persona interesada para resolver sus dudas técnicas sobre los vehículos Toyota usados en inventario y remitir la información económica solicitada.
          </p>
          <p>
            <strong>b) Gestión de Retoma Vehicular:</strong> Analizar las características del vehículo ofrecido en retoma como parte de pago y coordinar el respectivo peritaje mecánico y legal.
          </p>
          <p>
            <strong>c) Trámites de Tránsito y Transporte:</strong> Elaborar los contratos de compraventa, poderes, mandatos de traspaso y adelantar la gestión documental ante los Organismos de Tránsito y el RUNT (Registro Único Nacional de Tránsito).
          </p>
          <p>
            <strong>d) Facturación y Cumplimiento Legal:</strong> Dar cumplimiento a las obligaciones legales, tributarias y comerciales que imponen las leyes colombianas a las personas jurídicas del sector automotriz.
          </p>
          <p>
            <strong>e) Calidad en el Servicio:</strong> Medir el nivel de satisfacción de los clientes que han adquirido o vendido vehículos a través de {LEGAL_DATA.nombreComercial}.
          </p>
        </div>
      </section>

      {/* 5. Formularios */}
      <section id="formularios-contacto" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Send className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            5. Tratamiento de Datos Enviados Mediante Formularios de Contacto
          </h2>
        </div>
        <p>
          Cuando usted diligencia el formulario web de {LEGAL_DATA.nombreComercial}:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
          <li>Sus datos viajan cifrados bajo el estándar seguro HTTPS a nuestro servidor y base de datos relacional.</li>
          <li>Se genera un registro digital con fecha y hora de la solicitud, así como constancia de la marcación afirmativa de la autorización.</li>
          <li>Un asesor comercial de TOYO GP se pondrá en contacto a través del canal indicado (teléfono, WhatsApp o correo) para responder su requerimiento específico.</li>
          <li>Sus datos no serán transferidos a compañías de publicidad de terceros ni se utilizarán para fines no autorizados por usted.</li>
        </ul>
      </section>

      {/* 6. Derechos del titular */}
      <section id="derechos-titular" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          6. Derechos del Titular de los Datos Personales
        </h2>
        <p>
          De acuerdo con el artículo 8 de la Ley 1581 de 2012, usted como titular de la información goza de las siguientes prerrogativas:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">1. Consulta y Acceso:</strong>
            Conocer de manera integral y gratuita qué datos personales suyos están siendo tratados por TOYO GP.
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">2. Actualización y Rectificación:</strong>
            Solicitar la modificación o corrección de datos que resulten inexactos, incompletos o desactualizados.
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">3. Prueba de la Autorización:</strong>
            Exigir comprobante de la autorización previa otorgada a {LEGAL_DATA.razonSocial}.
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">4. Revocatoria y Supresión:</strong>
            Revocar la autorización o solicitar la eliminación de sus datos cuando considere que no se están respetando los principios legales.
          </div>
        </div>
      </section>

      {/* 7. Procedimiento Consultas */}
      <section id="procedimiento-peticiones" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <KeyRound className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            7. Procedimiento para Solicitar Consulta, Actualización o Rectificación
          </h2>
        </div>
        <p className="text-sm">
          El titular o sus apoderados debidamente autorizados podrán ejercer su derecho de consulta mediante comunicación
          escrita dirigida al correo <strong>{LEGAL_DATA.correoContacto}</strong> con el asunto: <em>«Consulta Hábeas Data»</em>.
        </p>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs space-y-2">
          <p className="font-semibold text-gray-900 text-sm">Tiempos Legales de Atención para Consultas:</p>
          <ul className="space-y-1 text-gray-600">
            <li>• <strong>Término Ordinario:</strong> Máximo <strong>diez (10) días hábiles</strong> contados a partir del día siguiente al recibo de la consulta.</li>
            <li>• <strong>Prórroga Legal:</strong> Cuando no fuere posible atender la consulta dentro del plazo anterior, se notificará al titular los motivos de la demora y se señalará la nueva fecha de respuesta, la cual no superará <strong>cinco (5) días hábiles</strong> adicionales.</li>
          </ul>
        </div>
      </section>

      {/* 8. Procedimiento Reclamaciones */}
      <section id="procedimiento-reclamaciones" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          8. Procedimiento para Presentar una Reclamación (Supresión o Corrección)
        </h2>
        <p className="text-sm">
          El titular que considere que la información contenida en nuestras bases de datos debe ser objeto de corrección,
          actualización o supresión, o cuando advierta el presunto incumplimiento de cualquiera de los deberes contenidos
          en la Ley 1581 de 2012, podrá presentar un reclamo formal ante {LEGAL_DATA.nombreComercial}.
        </p>

        <div className="bg-white p-4 rounded-xl border border-gray-200 text-xs space-y-2">
          <p className="font-bold text-gray-900 text-sm">Requisitos Mínimos del Reclamo:</p>
          <ol className="list-decimal pl-4 space-y-1 text-gray-600">
            <li>Identificación completa del titular (Nombres, apellidos y número de documento de identidad).</li>
            <li>Descripción clara y precisa de los hechos que dan lugar al reclamo y del derecho que desea ejercer (rectificación, actualización o supresión).</li>
            <li>Datos de contacto para notificación (dirección física, teléfono y correo electrónico).</li>
            <li>Documentos o soportes que pretenda hacer valer (si aplica).</li>
          </ol>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs space-y-1.5 text-gray-700">
          <p className="font-semibold text-gray-900">Plazos y Trámite del Reclamo:</p>
          <p>
            • Si el reclamo resulta incompleto, se le solicitará subsanarlo dentro de los <strong>cinco (5) días hábiles</strong> siguientes a su recepción.
          </p>
          <p>
            • Una vez recibido el reclamo completo, se incluirá en la base de datos la leyenda <em>«Reclamo en trámite»</em> en un término no mayor a dos (2) días hábiles.
          </p>
          <p>
            • El término máximo para responder el reclamo será de <strong>quince (15) días hábiles</strong> contados a partir del día siguiente a su recepción. Si no es posible responder en dicho plazo, se informará al interesado antes de su vencimiento y se dispondrá de una prórroga de hasta <strong>ocho (8) días hábiles</strong>.
          </p>
        </div>
      </section>

      {/* 9. Canales de atención */}
      <section id="canales-atencion" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          9. Canal Oficial de Atención para Datos Personales
        </h2>
        <p className="text-sm">
          {LEGAL_DATA.razonSocial} ha designado como canal preferente y centralizado para la atención de solicitudes de Hábeas Data:
        </p>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div>
            <strong className="block text-gray-900">Correo Electrónico Exclusivo:</strong>
            <a href={`mailto:${LEGAL_DATA.correoContacto}`} className="text-[#D90429] font-medium underline">
              {LEGAL_DATA.correoContacto}
            </a>
          </div>
          <div>
            <strong className="block text-gray-900">Atención Telefónica / WhatsApp:</strong>
            <span className="text-gray-700">{LEGAL_DATA.telefono}</span>
          </div>
          <div>
            <strong className="block text-gray-900">Recepción Presencial:</strong>
            <span className="text-gray-700">{LEGAL_DATA.direccion}, {LEGAL_DATA.localidad}, {LEGAL_DATA.ciudad}</span>
          </div>
          <div>
            <strong className="block text-gray-900">Horarios de Atención:</strong>
            <span className="text-gray-700">{LEGAL_DATA.horarioSemana}</span>
          </div>
        </div>
      </section>

      {/* 10. Medidas de seguridad */}
      <section id="medidas-seguridad" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <ShieldAlert className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            10. Medidas de Seguridad de la Información
          </h2>
        </div>
        <p className="text-sm">
          En cumplimiento del principio de seguridad establecido en la Ley 1581 de 2012, {LEGAL_DATA.nombreComercial}
          implementa medidas técnicas, humanas y administrativas necesarias para brindar seguridad a los registros,
          evitando su adulteración, pérdida, consulta o acceso no autorizado:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
          <li>Almacenamiento en servidores de base de datos certificados con copias de respaldo continuas y cifrado TLS.</li>
          <li>Controles de acceso restringido con contraseñas robustas y autenticación de doble factor para el equipo comercial autorizado.</li>
          <li>Protocolos para la destrucción segura de documentos físicos que contengan información personal tras el vencimiento de los términos contractuales de guarda legal.</li>
        </ul>
      </section>

      {/* 11. Conservación */}
      <section id="conservacion" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Clock className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            11. Conservación de la Información y Supresión Segura
          </h2>
        </div>
        <p className="text-sm">
          Los datos personales se conservarán mientras subsista la relación comercial o precontractual con el titular
          y durante el tiempo exigido por las leyes tributarias, mercantiles y de tránsito automotor de Colombia
          (plazos que oscilan entre 5 y 10 años para la conservación de libros y comprobantes de comercio según el Código de Comercio colombiano).
        </p>
        <p className="text-xs text-gray-500">
          Una vez agotada la finalidad o vencidos los términos legales de conservación obligatoria, la información será eliminada o anonimizada definitivamente de nuestras bases de datos activas.
        </p>
      </section>

      {/* 12. Quejas ante la SIC */}
      <section id="sic-reclamacion" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-amber-600" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            12. Reclamación ante la Superintendencia de Industria y Comercio (SIC)
          </h2>
        </div>
        <p className="text-sm">
          De conformidad con el artículo 16 de la Ley 1581 de 2012, el titular o causahabiente solo podrá elevar queja
          ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong> una vez haya agotado el trámite de consulta
          o reclamo directamente ante {LEGAL_DATA.razonSocial}.
        </p>
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
          <p className="font-semibold">Información de Contacto de la Autoridad de Control:</p>
          <p>• Entidad: Superintendencia de Industria y Comercio - Delegatura para la Protección de Datos Personales.</p>
          <p>• Portal Web Oficial: <a href={LEGAL_DATA.sicUrl} target="_blank" rel="noopener noreferrer" className="underline font-medium">{LEGAL_DATA.sicUrl}</a></p>
          <p>• Teléfono de atención en Bogotá: {LEGAL_DATA.sicTelefono} | Línea gratuita nacional: 01 8000 910165.</p>
        </div>
        <div className="pt-2 text-xs text-gray-500 font-semibold">
          Fecha de vigencia y última actualización: {LEGAL_DATA.fechaActualizacion} · {LEGAL_DATA.ciudad}.
        </div>
      </section>
    </LegalLayout>
  );
}
