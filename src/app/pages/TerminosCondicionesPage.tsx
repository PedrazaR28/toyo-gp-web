import LegalLayout from "../components/LegalLayout";
import LEGAL_DATA from "../../data/legalData";
import { FileText, Car, AlertCircle, ShieldCheck, Scale, ExternalLink, Copyright, Info } from "lucide-react";

const TOC = [
  { id: "objeto", title: "1. Objeto del Sitio Web (Vitrina Informativa)" },
  { id: "informacion-vehiculos", title: "2. Información, Características y Precios de Vehículos" },
  { id: "disponibilidad", title: "3. Disponibilidad y Cambios sin Previo Aviso" },
  { id: "contacto-cotizacion", title: "4. Proceso de Contacto y Solicitudes" },
  { id: "responsabilidad-usuario", title: "5. Responsabilidad del Usuario sobre los Datos" },
  { id: "estatuto-consumidor", title: "6. Normativa del Consumidor (Ley 1480 y Ley 2439)" },
  { id: "propiedad-intelectual", title: "7. Propiedad Intelectual y Marcas Registradas" },
  { id: "uso-permitido", title: "8. Uso Permitido del Sitio y Prohibiciones" },
  { id: "limitacion-responsabilidad", title: "9. Limitaciones de Responsabilidad" },
  { id: "enlaces-externos", title: "10. Enlaces a Sitios de Terceros" },
  { id: "proteccion-datos", title: "11. Protección de Datos Personales" },
  { id: "comunicaciones", title: "12. Comunicaciones Electrónicas" },
  { id: "modificaciones", title: "13. Modificaciones a los Términos" },
  { id: "legislacion-jurisdiccion", title: "14. Legislación Aplicable y Jurisdicción" },
];

export default function TerminosCondicionesPage() {
  return (
    <LegalLayout
      pageTitle="Términos y Condiciones | TOYO GP"
      metaDescription="Términos y Condiciones de uso del sitio web oficial de TOYO GP (Toyo Gp Sas), vitrina y canal de contacto de vehículos usados en Bogotá, Colombia. Sujeto al Estatuto del Consumidor y leyes colombianas."
      heading="Términos y Condiciones"
      subtitle="Condiciones de Uso del Sitio Web"
      toc={TOC}
    >
      {/* Introducción */}
      <div className="border-b border-gray-100 pb-6">
        <p className="text-base text-gray-700 leading-relaxed font-normal">
          Bienvenido al sitio web oficial de <strong>{LEGAL_DATA.razonSocial}</strong> (en adelante identificada
          comercialmente como <strong>«{LEGAL_DATA.nombreComercial}»</strong>), con domicilio en la ciudad de
          Bogotá D.C., Colombia, accesible a través de este portal digital.
        </p>
        <p className="text-sm text-gray-600 mt-3">
          El acceso, navegación y uso de este portal web se rige por los presentes <strong>Términos y Condiciones</strong>,
          así como por la legislación colombiana aplicable, en particular la <strong>Ley 1480 de 2011 (Estatuto del Consumidor)</strong>,
          la <strong>Ley 2439 de 2024</strong>, la <strong>Ley 527 de 1999</strong> (Comercio Electrónico y Mensajes de Datos)
          y las normas sobre protección de datos personales. Le solicitamos leer cuidadosamente este documento antes de hacer uso de nuestros servicios informativos.
        </p>
      </div>

      {/* 1. Objeto */}
      <section id="objeto" className="space-y-4 pt-4">
        <div className="flex items-center gap-2">
          <Car className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            1. Objeto del Sitio Web: Vitrina Digital y Canal de Contacto
          </h2>
        </div>
        <p>
          Este sitio web tiene por objeto exclusivo servir como <strong>vitrina comercial, catálogo informativo y canal digital de contacto</strong> para
          la promoción de los servicios de compra, venta, retoma y gestión de trámites vehiculares de automotores usados
          (con especial énfasis en la marca Toyota) ofrecidos por {LEGAL_DATA.nombreComercial}.
        </p>
        <div className="bg-red-50 border-l-4 border-[#D90429] p-4 rounded-r-xl text-xs text-red-950 flex items-start gap-3 leading-relaxed">
          <AlertCircle size={18} className="text-[#D90429] flex-shrink-0 mt-0.5" />
          <div>
            <strong>Aclaración Fundamental sobre la Naturaleza del Sitio:</strong> Este portal web <strong>NO</strong> constituye
            una tienda de comercio electrónico transaccional («tienda online»), no procesa pagos en línea ni cuenta con pasarelas de pago digitales.
            La adquisición, venta, pago y traspaso de vehículos automotores se perfecciona de manera <strong>presencial, formal y solemne</strong> en
            nuestras instalaciones físicas o mediante la suscripción de contratos de compraventa y mandatos de tránsito conforme a las normas
            del Código de Comercio y el Código Nacional de Tránsito de Colombia.
          </div>
        </div>
      </section>

      {/* 2. Información de vehículos */}
      <section id="informacion-vehiculos" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Info className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            2. Información de Vehículos, Características y Precios Publicados
          </h2>
        </div>
        <p>
          {LEGAL_DATA.nombreComercial} realiza sus mejores esfuerzos técnicos para asegurar que las especificaciones, fotografías,
          kilometraje, modelos y precios informados en este sitio o en las plataformas vinculadas (como TuCarro / Mercado Libre)
          sean exactos, veraces y suficientes. No obstante:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
          <li>
            <strong>Precios en Pesos Colombianos (COP):</strong> Todos los precios sugeridos o publicados se expresan en moneda legal colombiana. Los precios corresponden al valor comercial orientativo del vehículo y no incluyen gastos de matrícula, retención en la fuente, impuestos de traspaso vehicular, pólizas de seguro ni honorarios de gestoría de tránsito, a menos que se pacte expresamente por escrito en la oferta comercial formal.
          </li>
          <li>
            <strong>Naturaleza de Automotores Usados:</strong> Al tratarse de vehículos usados, cada unidad posee un estado de conservación, kilometraje, historial de mantenimientos y desgaste propio del uso previo, los cuales deben ser verificados por el comprador mediante inspección visual y peritaje técnico en sala de ventas.
          </li>
          <li>
            <strong>Fotografías Reales:</strong> Las imágenes expuestas en el sitio web y redes sociales corresponden a los vehículos físicamente exhibidos o comercializados, sin perjuicio de variaciones en la percepción visual de tonalidades derivadas de la pantalla o dispositivo del usuario.
          </li>
        </ul>
      </section>

      {/* 3. Disponibilidad */}
      <section id="disponibilidad" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          3. Disponibilidad de Inventario y Modificaciones sin Previo Aviso
        </h2>
        <p>
          Debido a la dinámica del mercado automotriz de vehículos usados —donde cada vehículo es una unidad única irrepetible—,
          la disponibilidad física en sala de ventas puede variar en cualquier momento por ventas efectuadas de forma presencial.
        </p>
        <p className="text-sm text-gray-600">
          {LEGAL_DATA.nombreComercial} se reserva el derecho de modificar, actualizar, suspender o retirar de la vitrina digital cualquier vehículo,
          precio o servicio en cualquier momento y sin previo aviso, sin que ello genere responsabilidad alguna o derecho a indemnización en favor de terceros.
        </p>
      </section>

      {/* 4. Proceso de contacto */}
      <section id="contacto-cotizacion" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          4. Proceso de Contacto y Solicitud de Información
        </h2>
        <p>
          El diligenciamiento del formulario de contacto web, el envío de mensajes a la línea de WhatsApp <strong>{LEGAL_DATA.telefono}</strong> o
          la solicitud de cotizaciones telefónicas:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1 text-sm text-[#D90429]">No Constituye Oferta Irrevocable</span>
            El envío de una solicitud no genera obligación contractual de venta ni reserva automática del vehículo a favor del usuario hasta tanto no se formalice el correspondiente contrato de compraventa y abono formal aceptado por {LEGAL_DATA.razonSocial}.
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1 text-sm text-[#D90429]">Retoma Sujeta a Peritaje</span>
            Cualquier valoración preliminar sobre un vehículo ofrecido en retoma es puramente estimativa y queda estrictamente sujeta a la revisión técnico-mecánica, prueba de ruta y validación de antecedentes legales (SIMIT, RUNT, embargos, prendas) de manera presencial.
          </div>
        </div>
      </section>

      {/* 5. Responsabilidad del usuario */}
      <section id="responsabilidad-usuario" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          5. Responsabilidad del Usuario sobre la Información Suministrada
        </h2>
        <p>
          El usuario declara y garantiza que todos los datos suministrados a través de los formularios o canales de chat son veraces,
          exactos, vigentes y corresponden a su propia persona. El usuario se abstendrá de suministrar datos de terceros sin contar
          con la debida autorización legal previa.
        </p>
        <p className="text-sm text-gray-600">
          En los casos de cotización de retoma vehicular, el usuario es el único responsable por la exactitud de los datos sobre
          el estado, kilometraje, multas y titularidad del automotor que describe.
        </p>
      </section>

      {/* 6. Estatuto del Consumidor */}
      <section id="estatuto-consumidor" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Scale className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            6. Normativa Aplicable al Consumidor (Ley 1480 de 2011 y Ley 2439 de 2024)
          </h2>
        </div>
        <p>
          {LEGAL_DATA.razonSocial} ejerce su actividad comercial con estricto apego a las disposiciones de la
          <strong> Ley 1480 de 2011 (Estatuto del Consumidor)</strong> y la <strong>Ley 2439 de 2024</strong>:
        </p>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="p-3.5 bg-gray-50 rounded-lg border border-gray-200">
            <strong className="text-gray-900 block mb-1">Garantía en Vehículos Usados:</strong>
            De conformidad con el artículo 8 de la Ley 1480 de 2011 y las directrices de la Superintendencia de Industria y Comercio,
            los vehículos usados se comercializan bajo las condiciones y términos de garantía pactados de forma expresa, clara y escrita
            en el contrato de compraventa vehicular particular suscrito entre las partes, informando detalladamente las partes o componentes
            cubiertos y su vigencia.
          </div>
          <div className="p-3.5 bg-gray-50 rounded-lg border border-gray-200">
            <strong className="text-gray-900 block mb-1">Derecho de Información y Traspaso Seguro:</strong>
            {LEGAL_DATA.nombreComercial} garantiza la consulta y entrega de información clara sobre el historial del vehículo en el RUNT,
            así como la legalidad de los documentos requeridos para el traspaso ante el organismo de tránsito competente.
          </div>
          <div className="p-3.5 bg-gray-50 rounded-lg border border-gray-200">
            <strong className="text-gray-900 block mb-1">Atención de PQRS:</strong>
            Los clientes y consumidores podrán presentar peticiones, quejas, reclamos o sugerencias a través del correo{" "}
            <a href={`mailto:${LEGAL_DATA.correoContacto}`} className="text-[#D90429] font-medium underline">
              {LEGAL_DATA.correoContacto}
            </a>, las cuales serán atendidas en un término no mayor a quince (15) días hábiles conforme al marco legal colombiano.
          </div>
        </div>
      </section>

      {/* 7. Propiedad Intelectual */}
      <section id="propiedad-intelectual" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Copyright className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            7. Propiedad Intelectual y Uso Descriptivo de Marcas de Terceros
          </h2>
        </div>
        <p>
          Todos los contenidos de este sitio web, incluyendo sin limitación el diseño gráfico, logotipos de TOYO GP, código fuente,
          textos, fotografías originales, interfaces y disposición de elementos, son propiedad exclusiva de {LEGAL_DATA.razonSocial}
          o se encuentran licenciados legítimamente para su uso, amparados por las leyes de propiedad intelectual de Colombia y convenios internacionales.
        </p>
        <div className="p-3.5 bg-gray-50 rounded-lg text-xs text-gray-600 border border-gray-200 leading-relaxed">
          <strong>Aviso sobre Marcas Automotrices de Terceros:</strong> La mención de marcas, nombres comerciales o logotipos de fabricantes
          automotrices (tales como «Toyota», «Hilux», «Prado», «Fortuner», «Land Cruiser», entre otras) se realiza con propósitos estrictamente
          <strong> informativos y descriptivos</strong> para identificar la marca, línea y compatibilidad de los vehículos automotores usados
          que se exhiben y comercializan en la vitrina, de conformidad con las excepciones consagradas en la Decisión 486 de la Comisión de la
          Comunidad Andina y el régimen de propiedad industrial colombiano. {LEGAL_DATA.nombreComercial} no ostenta representación oficial ni
          concesión directa de dichas marcas a menos que se exprese de forma particular.
        </div>
      </section>

      {/* 8. Uso Permitido */}
      <section id="uso-permitido" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          8. Uso Permitido del Sitio y Prohibiciones
        </h2>
        <p>
          El usuario se compromete a hacer uso de este sitio web conforme a la ley, la moral, las buenas costumbres y estos términos.
          Queda expresamente prohibido:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
          <li>Utilizar herramientas automatizadas (robots, spiders, scrapers o crawlers) para extraer contenido, imágenes o inventario del sitio sin consentimiento escrito previo.</li>
          <li>Introducir virus, troyanos, gusanos u otro material malicioso que vulnere la seguridad informática del servidor.</li>
          <li>Utilizar los formularios de contacto para enviar publicidad no deseada (SPAM) o mensajes fraudulentos.</li>
          <li>Suplantar la identidad de cualquier persona natural o jurídica en las solicitudes enviadas.</li>
        </ul>
      </section>

      {/* 9. Limitaciones de responsabilidad */}
      <section id="limitacion-responsabilidad" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            9. Limitaciones de Responsabilidad
          </h2>
        </div>
        <p>
          En la máxima medida permitida por la ley colombiana, {LEGAL_DATA.razonSocial} no será responsable por:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
          <li>Interrupciones o caídas imprevistas en la disponibilidad del sitio web causadas por fallas de proveedores de hosting, redes de telecomunicaciones o fuerza mayor.</li>
          <li>Decisiones comerciales o financieras adoptadas por el usuario basadas exclusivamente en la información preliminar del portal sin verificación física o peritaje en sala de ventas.</li>
          <li>Errores tipográficos o inconsistencias numéricas involuntarias en los precios publicados, los cuales serán corregidos con prontitud una vez detectados.</li>
        </ul>
      </section>

      {/* 10. Enlaces externos */}
      <section id="enlaces-externos" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <ExternalLink className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            10. Enlaces a Sitios y Plataformas de Terceros
          </h2>
        </div>
        <p>
          El sitio web contiene enlaces a plataformas operadas por terceros independientes, tales como la vitrina de vehículos
          en <strong>TuCarro / Mercado Libre</strong>, el perfil oficial en <strong>Instagram</strong>, la mensajería de <strong>WhatsApp (Meta)</strong> y
          el mapa interactivo de <strong>Google Maps</strong>.
        </p>
        <p className="text-sm text-gray-600">
          La inclusión de dichos enlaces no implica aval, control ni asunción de responsabilidad alguna por parte de {LEGAL_DATA.nombreComercial}
          respecto a los contenidos, políticas de privacidad o disponibilidad de dichos sitios de terceros. Se sugiere al usuario revisar los términos de cada plataforma externa.
        </p>
      </section>

      {/* 11. Protección de datos */}
      <section id="proteccion-datos" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          11. Protección de Datos Personales
        </h2>
        <p>
          El tratamiento de los datos personales recopilados a través de los formularios o canales digitales se sujeta íntegramente
          a nuestra <strong>Política de Privacidad</strong> y al <strong>Manual de Tratamiento de Datos Personales</strong>,
          los cuales forman parte vinculante de estos Términos y Condiciones.
        </p>
      </section>

      {/* 12. Comunicaciones */}
      <section id="comunicaciones" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          12. Comunicaciones Electrónicas y Validez Probatoria
        </h2>
        <p>
          En aplicación de la Ley 527 de 1999 sobre comercio electrónico, los mensajes de datos, correos electrónicos y comunicaciones
          remitidas por canales autorizados (como WhatsApp Business) tendrán plena validez legal y probatoria para documentar las solicitudes,
          cotizaciones y acuerdos preliminares entre las partes.
        </p>
      </section>

      {/* 13. Modificaciones */}
      <section id="modificaciones" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          13. Modificaciones a los Términos y Condiciones
        </h2>
        <p>
          {LEGAL_DATA.razonSocial} se reserva el derecho de revisar, adicionar o modificar en cualquier momento los presentes Términos y Condiciones.
          La versión más reciente estará permanentemente disponible en esta misma página con indicación de su fecha de actualización.
          El uso continuo del sitio web tras la publicación de cambios implicará su aceptación expresa por parte del usuario.
        </p>
      </section>

      {/* 14. Legislación y jurisdicción */}
      <section id="legislacion-jurisdiccion" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          14. Legislación Aplicable y Jurisdicción
        </h2>
        <p>
          Estos Términos y Condiciones se interpretan, rigen y ejecutan bajo las leyes de la <strong>República de Colombia</strong>.
        </p>
        <p className="text-sm text-gray-600">
          Para cualquier discrepancia, controversia o litigio que pudiere suscitarse con ocasión del uso de este sitio web y que no pueda
          ser resuelta de común acuerdo entre las partes mediante arreglo directo, las partes se someten a los jueces ordinarios y tribunales
          competentes de la ciudad de <strong>Bogotá D.C., Colombia</strong>, renunciando expresamente a cualquier otro fuero territorial que
          pudiese corresponderles.
        </p>
        <div className="pt-2 text-xs text-gray-500 font-semibold">
          Última actualización: {LEGAL_DATA.fechaActualizacion} · {LEGAL_DATA.ciudad}.
        </div>
      </section>
    </LegalLayout>
  );
}
