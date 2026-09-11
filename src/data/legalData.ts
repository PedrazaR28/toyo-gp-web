/**
 * Datos jurídicos y de contacto centralizados de TOYO GP
 * Modifica estos valores para actualizar la información en todas las páginas legales del sitio.
 */

export interface LegalConfig {
  /** Razón Social de la empresa */
  razonSocial: string;
  /** Nombre comercial o de marca */
  nombreComercial: string;
  /** Número de Identificación Tributaria con dígito de verificación */
  nit: string;
  /** Correo oficial para recepción de PQRS y ejercicio de derechos de Hábeas Data */
  correoContacto: string;
  /** Correo general de atención al cliente */
  correoAtencion: string;
  /** Línea telefónica y de WhatsApp */
  telefono: string;
  /** Número telefónico en formato internacional sin caracteres para enlaces */
  telefonoRaw: string;
  /** Dirección física del establecimiento comercial */
  direccion: string;
  /** Sector / Barrio / Localidad */
  localidad: string;
  /** Ciudad y País */
  ciudad: string;
  pais: string;
  /** Horarios de atención al público */
  horarioSemana: string;
  horarioSabado: string;
  /** Fecha de última actualización de las políticas legales */
  fechaActualizacion: string;
  /** URL oficial de la Superintendencia de Industria y Comercio */
  sicUrl: string;
  /** Teléfono de la SIC para atención nacional */
  sicTelefono: string;

  /* ── PLACEHOLDERS JURÍDICOS CLARAMENTE IDENTIFICADOS ── */
  /** Representante Legal (Placeholder si no está definido en el código actual) */
  representanteLegal: string;
  /** Matrícula Mercantil de la Cámara de Comercio (Placeholder) */
  matriculaMercantil: string;
  /** Cámara de Comercio ante la cual se encuentra registrada la sociedad */
  camaraComercio: string;
}

export const LEGAL_DATA: LegalConfig = {
  razonSocial: "TOYO GP SAS",
  nombreComercial: "TOYO GP",
  nit: "901474387-7",
  correoContacto: "usadosgp@gmail.com",
  correoAtencion: "usadosgp@gmail.com",
  telefono: "+57 322 819 0056",
  telefonoRaw: "573228190056",
  direccion: "Av. El Dorado #68C - 61",
  localidad: "Fontibón",
  ciudad: "Bogotá D.C.",
  pais: "Colombia",
  horarioSemana: "Lunes a Viernes: 9:00 am – 4:00 pm",
  horarioSabado: "Sábados: 9:00 am – 1:00 pm",
  fechaActualizacion: "Septiembre de 2024",
  sicUrl: "https://www.sic.gov.co",
  sicTelefono: "+57 (601) 587 0000",

  /* Datos oficiales de TOYO GP SAS registrados */
  representanteLegal: "Cristian Pedraza",
  matriculaMercantil: "3364269",
  camaraComercio: "Cámara de Comercio de Bogotá",
};

export default LEGAL_DATA;
