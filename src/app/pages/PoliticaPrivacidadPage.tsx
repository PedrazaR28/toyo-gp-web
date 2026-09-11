import LegalLayout from "../components/LegalLayout";
import LEGAL_DATA from "../../data/legalData";
import { Shield, FileCheck, HelpCircle, AlertCircle, Lock, Mail, ExternalLink } from "lucide-react";

const TOC = [
  { id: "identificacion", title: "1. Identificación del Responsable" },
  { id: "marco-legal", title: "2. Marco Legal Aplicable" },
  { id: "datos-recolectados", title: "3. Datos Personales que Recopilamos" },
  { id: "finalidades", title: "4. Finalidades del Tratamiento" },
  { id: "canales-contacto", title: "5. Canales de Contacto (Web y WhatsApp)" },
  { id: "almacenamiento-seguridad", title: "6. Almacenamiento y Medidas de Seguridad" },
  { id: "derechos-titulares", title: "7. Derechos de los Titulares" },
  { id: "procedimiento-consultas-reclamos", title: "8. Procedimiento para Consultas y Reclamos" },
  { id: "revocatoria", title: "9. Revocatoria de la Autorización y Supresión" },
  { id: "cookies", title: "10. Uso de Cookies y Analítica Web" },
  { id: "transferencia-terceros", title: "11. Transmisión y Enlaces a Terceros" },
  { id: "vigencia", title: "12. Vigencia y Modificaciones" },
];

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout
      pageTitle="Política de Privacidad | TOYO GP"
      metaDescription="Política de Privacidad y Tratamiento de Datos Personales de TOYO GP (Toyo Gp Sas), comercializadora de vehículos usados en Bogotá, Colombia. Cumplimiento Ley 1581 de 2012."
      heading="Política de Privacidad"
      subtitle="Información Legal · TOYO GP"
      toc={TOC}
    >
      {/* Introducción */}
      <div className="border-b border-gray-100 pb-6">
        <p className="text-base text-gray-700 leading-relaxed font-normal">
          En cumplimiento de lo dispuesto en la <strong>Constitución Política de Colombia</strong> (Artículo 15),
          la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto Reglamentario 1074 de 2015</strong> (Capítulo 25)
          y demás normas concordantes, <strong>{LEGAL_DATA.razonSocial}</strong> (en adelante identificada comercialmente como{" "}
          <strong>{LEGAL_DATA.nombreComercial}</strong>) pone a disposición de sus usuarios, clientes, proveedores y del público
          en general la presente <strong>Política de Privacidad y Tratamiento de Datos Personales</strong>.
        </p>
        <p className="text-sm text-gray-600 mt-3">
          Este documento regula la forma en que recopilamos, usamos, almacenamos, circulamos y protegemos la información
          suministrada a través de nuestro sitio web oficial, formularios digitales, canales de mensajería instantánea
          (WhatsApp), correo electrónico y atención presencial en nuestro establecimiento comercial en la ciudad de Bogotá D.C.
        </p>
      </div>

      {/* 1. Identificación */}
      <section id="identificacion" className="space-y-4 pt-4">
        <div className="flex items-center gap-2">
          <Shield className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            1. Identificación del Responsable del Tratamiento
          </h2>
        </div>
        <p>
          El responsable del tratamiento de los datos personales recopilados a través de este portal y de sus actividades
          comerciales es:
        </p>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 grid sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="font-semibold text-gray-900 block">Razón Social:</span>
            <span className="text-gray-700">{LEGAL_DATA.razonSocial}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Nombre Comercial:</span>
            <span className="text-gray-700">{LEGAL_DATA.nombreComercial}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">NIT:</span>
            <span className="text-gray-700">{LEGAL_DATA.nit}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Representante Legal:</span>
            <span className="text-gray-700">{LEGAL_DATA.representanteLegal}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Registro Mercantil:</span>
            <span className="text-gray-700">Matrícula N° {LEGAL_DATA.matriculaMercantil} ({LEGAL_DATA.camaraComercio})</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Domicilio Principal:</span>
            <span className="text-gray-700">{LEGAL_DATA.ciudad}, {LEGAL_DATA.pais}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Dirección Física:</span>
            <span className="text-gray-700">{LEGAL_DATA.direccion}, {LEGAL_DATA.localidad}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Correo Oficial de Hábeas Data:</span>
            <a href={`mailto:${LEGAL_DATA.correoContacto}`} className="text-[#D90429] hover:underline">
              {LEGAL_DATA.correoContacto}
            </a>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Teléfono / WhatsApp:</span>
            <span className="text-gray-700">{LEGAL_DATA.telefono}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Actividad Económica:</span>
            <span className="text-gray-700">Comercialización de vehículos automotores usados y trámites de tránsito</span>
          </div>
        </div>
      </section>

      {/* 2. Marco Legal */}
      <section id="marco-legal" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          2. Marco Legal y Ámbito de Aplicación
        </h2>
        <p>
          Esta Política se rige bajo los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia,
          acceso y circulación restringida, seguridad y confidencialidad consagrados en el artículo 4 de la Ley 1581 de 2012.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
          <li><strong>Constitución Política de Colombia:</strong> Artículo 15 (Derecho fundamental al Hábeas Data).</li>
          <li><strong>Ley 1581 de 2012:</strong> Por la cual se dictan disposiciones generales para la protección de datos personales.</li>
          <li><strong>Decreto 1074 de 2015:</strong> Capítulo 25, reglamentario del sector Comercio, Industria y Turismo.</li>
          <li><strong>Instrucciones y Circulares:</strong> Emitidas por la Delegatura para la Protección de Datos Personales de la Superintendencia de Industria y Comercio (SIC).</li>
        </ul>
      </section>

      {/* 3. Datos Recolectados */}
      <section id="datos-recolectados" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          3. Datos Personales que Recopilamos
        </h2>
        <p>
          {LEGAL_DATA.nombreComercial} recolecta únicamente los datos pertinentes, adecuados y estrictamente necesarios
          para el desarrollo de su objeto comercial y la atención de solicitudes de los usuarios:
        </p>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">a) Datos de Identificación y Contacto:</h3>
            <p className="text-xs text-gray-600">
              Nombres y apellidos completos, número de teléfono móvil o celular, cuenta de WhatsApp, correo electrónico y ciudad de residencia.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">b) Datos de Interés y Transaccionales Comerciales:</h3>
            <p className="text-xs text-gray-600">
              Tipo de servicio o interés comercial manifestado (compra de vehículo usado, venta, retoma como parte de pago, trámites vehiculares, información general) y mensajes o requerimientos específicos ingresados por el usuario.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">c) Datos Relacionados con Vehículos (en casos de retoma o trámite):</h3>
            <p className="text-xs text-gray-600">
              Marca, línea, modelo, año, kilometraje, placa, ciudad de matrícula y estado general del vehículo que el usuario voluntariamente desea cotizar para retoma o gestión de traspaso.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">d) Datos Técnicos y de Navegación:</h3>
            <p className="text-xs text-gray-600">
              Dirección IP anonimizada, tipo de navegador, sistema operativo y métricas agregadas de visitas recolectadas a través de herramientas de analítica web.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-xs text-amber-800 flex items-start gap-3">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <p>
            <strong>Aclaración sobre Datos Sensibles y Menores de Edad:</strong> {LEGAL_DATA.nombreComercial} <strong>NO</strong> solicita
            ni almacena datos sensibles (como origen racial, convicciones religiosas, orientación sexual, datos biométricos)
            a través de este portal, ni recopila datos de menores de 18 años. Si un menor de edad suministrase información sin
            la autorización de sus padres o representantes legales, sus datos serán eliminados inmediatamente de nuestras bases de datos.
          </p>
        </div>
      </section>

      {/* 4. Finalidades */}
      <section id="finalidades" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          4. Finalidades del Tratamiento de los Datos
        </h2>
        <p>
          La recolección y tratamiento de los datos personales por parte de {LEGAL_DATA.razonSocial} tiene como objetivos
          exclusivos las siguientes finalidades comerciales y operativas:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
          <li>
            <strong>Atención y Gestión de Solicitudes:</strong> Responder oportunamente a consultas, solicitudes de asesoría,
            cotizaciones e información sobre vehículos Toyota usados disponibles en nuestra vitrina.
          </li>
          <li>
            <strong>Contacto Comercial Directo:</strong> Establecer comunicación telefónica, electrónica o vía WhatsApp
            para orientar al titular sobre procesos de compra, consignación, venta o retoma vehicular.
          </li>
          <li>
            <strong>Agendamiento de Citas y Peritajes:</strong> Coordinar citas presenciales en nuestras instalaciones de Fontibón
            para revisión visual, peritajes técnicos y pruebas de ruta de los vehículos de interés.
          </li>
          <li>
            <strong>Gestión de Trámites de Tránsito:</strong> Brindar acompañamiento y adelantar las actuaciones ante los organismos
            de tránsito a nivel nacional (traspasos, levantamientos de prenda, radicación de cuentas, matrículas) cuando el cliente
            haya contratado dichos servicios.
          </li>
          <li>
            <strong>Envío de Información Comercial Relevante:</strong> Remitir novedades de inventario automotriz, cambios de precio
            o promociones, siempre que el usuario haya otorgado su consentimiento previo y expreso para dicha finalidad.
          </li>
          <li>
            <strong>Cumplimiento Normativo y Fiscal:</strong> Expedir documentos tributarios, facturas electrónicas, contratos de
            compraventa, mandatos y dar cumplimiento a requerimientos de autoridades judiciales o administrativas colombianas (DIAN, SIC, Policía Nacional, etc.).
          </li>
        </ol>
      </section>

      {/* 5. Canales de Contacto */}
      <section id="canales-contacto" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          5. Tratamiento Mediante Formularios Web y Canales de Contacto (WhatsApp)
        </h2>
        <p>
          En {LEGAL_DATA.nombreComercial} respetamos rigurosamente la voluntad del titular:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <FileCheck size={16} className="text-[#D90429]" />
              Formulario de Contacto Web
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              El envío del formulario de contacto requiere la marcación previa, libre e informada de la casilla de autorización.
              Los datos se reciben a través de una conexión cifrada y se integran en nuestro sistema de atención al cliente
              para contactar al usuario exclusivamente respecto a su requerimiento.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <ExternalLink size={16} className="text-[#25D366]" />
              Canal de WhatsApp Business
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Al hacer clic en el botón de WhatsApp o comunicarse al número oficial <strong>{LEGAL_DATA.telefono}</strong>,
              el titular inicia voluntariamente la conversación. Las interacciones se utilizan únicamente para brindar soporte
              y asesoría comercial, rigiéndose igualmente por las políticas de privacidad de Meta Platforms / WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Almacenamiento y Seguridad */}
      <section id="almacenamiento-seguridad" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Lock className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            6. Almacenamiento y Medidas de Seguridad de la Información
          </h2>
        </div>
        <p>
          {LEGAL_DATA.razonSocial} adopta medidas técnicas, humanas y administrativas estrictas para garantizar la
          confidencialidad, integridad y disponibilidad de los datos personales almacenados, evitando su adulteración, pérdida,
          consulta, uso o acceso no autorizado:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
          <li><strong>Cifrado en Tránsito:</strong> Comunicación protegida mediante protocolos seguros SSL/TLS (HTTPS).</li>
          <li><strong>Bases de Datos Protegidas:</strong> Almacenamiento con autenticación estricta y políticas de seguridad a nivel de fila (Row Level Security).</li>
          <li><strong>Acceso Restringido:</strong> Solo el personal debidamente facultado y capacitado en protección de datos tiene acceso a la información comercial.</li>
          <li><strong>Acuerdos de Confidencialidad:</strong> Todo el equipo de TOYO GP firma acuerdos de confidencialidad y reserva sobre los datos de clientes y prospectos.</li>
        </ul>
      </section>

      {/* 7. Derechos de los Titulares */}
      <section id="derechos-titulares" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          7. Derechos de los Titulares de los Datos
        </h2>
        <p>
          De conformidad con el artículo 8 de la Ley 1581 de 2012, usted como titular de datos personales cuenta con los
          siguientes derechos:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">a) Derecho a Conocer:</strong>
            <span className="text-xs text-gray-600">Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento por parte de TOYO GP.</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">b) Derecho a Actualizar y Rectificar:</strong>
            <span className="text-xs text-gray-600">Solicitar la corrección de datos inexactos, incompletos, fraccionados o que induzcan a error.</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">c) Derecho a Solicitar Prueba:</strong>
            <span className="text-xs text-gray-600">Requerir constancia de la autorización otorgada, salvo los casos expresamente exceptuados por la ley.</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">d) Derecho a ser Informado:</strong>
            <span className="text-xs text-gray-600">Conocer el uso efectivo que se le ha dado a sus datos personales previa solicitud.</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">e) Derecho de Queja ante la SIC:</strong>
            <span className="text-xs text-gray-600">Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la legislación de Hábeas Data.</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <strong className="text-gray-900 block mb-1">f) Derecho a Revocar y Suprimir:</strong>
            <span className="text-xs text-gray-600">Revocar la autorización o pedir la supresión de sus datos cuando en el tratamiento no se respeten los principios constitucionales y legales.</span>
          </div>
        </div>
      </section>

      {/* 8. Procedimiento para Consultas y Reclamos */}
      <section id="procedimiento-consultas-reclamos" className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <HelpCircle className="text-[#D90429]" size={20} />
          <h2
            className="text-lg sm:text-xl font-bold text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            8. Procedimiento para el Ejercicio de Derechos (Consultas y Reclamos)
          </h2>
        </div>
        <p>
          Para ejercer cualquiera de sus derechos de Hábeas Data, el titular o sus causahabientes deben dirigir una solicitud
          escrita formal a través de los siguientes canales habilitados:
        </p>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm">
          <p className="font-semibold text-gray-900 mb-2">Canales de Radicación:</p>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• <strong>Correo Electrónico:</strong> <a href={`mailto:${LEGAL_DATA.correoContacto}`} className="text-[#D90429] underline">{LEGAL_DATA.correoContacto}</a> con el asunto <em>«Solicitud Hábeas Data - [Nombre del Titular]»</em>.</li>
            <li>• <strong>Comunicación Escrita Física:</strong> Radicada en la {LEGAL_DATA.direccion}, {LEGAL_DATA.localidad}, {LEGAL_DATA.ciudad}, Colombia.</li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-sm mb-1 text-[#D90429]">A. Trámite de Consultas:</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Se responderán en un término máximo de <strong>diez (10) días hábiles</strong> contados a partir de la fecha de su recibo.
            </p>
            <p className="text-xs text-gray-500">
              Si no fuese posible atender la consulta dentro de dicho término, se informará al interesado antes del vencimiento, expresando los motivos de la demora y señalando la fecha de respuesta, la cual no podrá superar <strong>cinco (5) días hábiles</strong> siguientes al vencimiento del primer término.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-sm mb-1 text-[#D90429]">B. Trámite de Reclamos:</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Se responderán en un término máximo de <strong>quince (15) días hábiles</strong> contados a partir del día siguiente a la fecha de su recibo en debida forma.
            </p>
            <p className="text-xs text-gray-500">
              Si el reclamo resulta incompleto, se requerirá al solicitante dentro de los <strong>cinco (5) días hábiles</strong> siguientes a su recepción para que subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento sin que se presente la información requerida, se entenderá desistido.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Revocatoria */}
      <section id="revocatoria" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          9. Revocatoria de la Autorización y Supresión de Datos
        </h2>
        <p>
          Los titulares podrán en todo momento solicitar a {LEGAL_DATA.nombreComercial} la supresión de sus datos personales
          o revocar la autorización otorgada para el tratamiento de los mismos, mediante la presentación de un reclamo formal.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs text-gray-600 leading-relaxed">
          <strong>Límites Legales a la Supresión:</strong> La solicitud de supresión de la información y la revocatoria de la
          autorización no procederán cuando el titular tenga un deber legal o contractual de permanecer en la base de datos
          (por ejemplo, historial documental exigido por las autoridades de tránsito en traspasos vehiculares perfeccionados,
          o facturas y comprobantes contables que deben reposar en los archivos por mandato del Estatuto Tributario y Código de Comercio).
        </div>
      </section>

      {/* 10. Cookies */}
      <section id="cookies" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          10. Uso de Cookies y Tecnologías de Analítica Web
        </h2>
        <p>
          Nuestro sitio web utiliza cookies técnicas y herramientas de medición de audiencia (específicamente Google Analytics mediante la etiqueta <code>G-5PM368M6YP</code>)
          para optimizar la navegación del usuario, analizar el tráfico y mejorar la calidad de nuestra vitrina digital.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
          <li><strong>Cookies Técnicas Esenciales:</strong> Necesarias para permitir la navegación fluida y la visualización correcta de los elementos interactivos del sitio.</li>
          <li><strong>Cookies de Análisis (Google Analytics):</strong> Recopilan información anónima sobre páginas visitadas, tiempo de permanencia y origen geográfico aproximado.</li>
        </ul>
        <p className="text-xs text-gray-500">
          Usted puede en cualquier momento configurar o bloquear el uso de cookies a través de los ajustes de privacidad de su navegador web (Chrome, Safari, Firefox, Edge).
        </p>
      </section>

      {/* 11. Transmisión a terceros */}
      <section id="transferencia-terceros" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          11. Transmisión de Datos y Enlaces a Terceros
        </h2>
        <p>
          {LEGAL_DATA.nombreComercial} <strong>NO vende, alquila, comercializa ni cede</strong> los datos personales de sus usuarios
          a terceros bajo ninguna circunstancia.
        </p>
        <p className="text-sm text-gray-600">
          En nuestro sitio web se disponen enlaces a plataformas de terceros como <strong>TuCarro / Mercado Libre</strong>,
          <strong>Instagram</strong> y <strong>Google Maps</strong>. Al hacer clic en estos enlaces, el usuario abandonará nuestro sitio web
          y se someterá a las políticas de privacidad y términos de servicio de dichas plataformas externas.
        </p>
      </section>

      {/* 12. Vigencia */}
      <section id="vigencia" className="space-y-4 pt-4 border-t border-gray-100">
        <h2
          className="text-lg sm:text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          12. Vigencia y Modificaciones de la Política
        </h2>
        <p>
          La presente Política de Privacidad rige a partir de la fecha de su publicación en el sitio web de {LEGAL_DATA.nombreComercial}.
          Las bases de datos tendrán una vigencia equivalente al periodo durante el cual se mantenga la relación comercial, contractual
          o legal con el titular, más los plazos de conservación exigidos por las normas mercantiles, contables y de tránsito en Colombia.
        </p>
        <p className="text-sm text-gray-600">
          {LEGAL_DATA.razonSocial} se reserva el derecho de actualizar o modificar esta política en cualquier momento para adaptarla a novedades legislativas o cambios internos. Cualquier modificación sustancial será informada oportunamente a través de nuestro sitio web antes de su entrada en vigor.
        </p>
        <div className="pt-2 text-xs text-gray-500 font-semibold">
          Última actualización: {LEGAL_DATA.fechaActualizacion} · Bogotá D.C., Colombia.
        </div>
      </section>
    </LegalLayout>
  );
}
