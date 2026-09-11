import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, Calendar, ShieldCheck, Mail, Phone, MapPin, Building2 } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import LEGAL_DATA from "../../data/legalData";

interface TocItem {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  /** Título de la pestaña del navegador (SEO) */
  pageTitle: string;
  /** Meta descripción para buscadores (SEO) */
  metaDescription: string;
  /** Título principal (H1) */
  heading: string;
  /** Subtítulo legal */
  subtitle?: string;
  /** Fecha de última actualización */
  updatedAt?: string;
  /** Lista opcional de secciones para índice rápido */
  toc?: TocItem[];
  /** Contenido principal de la página legal */
  children: React.ReactNode;
}

export default function LegalLayout({
  pageTitle,
  metaDescription,
  heading,
  subtitle = "Información Legal",
  updatedAt = LEGAL_DATA.fechaActualizacion,
  toc,
  children,
}: LegalLayoutProps) {
  // Manejo de SEO básico para SPA
  useEffect(() => {
    document.title = pageTitle;

    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.setAttribute("name", "description");
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", metaDescription);
  }, [pageTitle, metaDescription]);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#1E293B]"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Header fijo con fondo oscuro consistente */}
      <Header forceSolid={true} />

      {/* ── BANNER SUPERIOR HERO LEGAL ───────────────────────── */}
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-16 bg-[#111111] text-white border-b border-white/10 relative overflow-hidden">
        {/* Sutil halo decorativo en rojo corporativo */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl"
          style={{ background: "#D90429" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Botón Volver al inicio */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-wider font-semibold py-1.5 px-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
                style={{ color: "#D90429" }}
              />
              Volver al inicio
            </Link>
          </div>

          {/* Subtítulo / Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: "#D90429" }}
            />
            <span
              className="text-xs uppercase tracking-widest text-[#D90429]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              {subtitle}
            </span>
          </div>

          {/* H1 Principal Único */}
          <h1
            className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {heading}
          </h1>

          {/* Metadatos de la política */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 pt-2 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <Building2 size={13} style={{ color: "#D90429" }} />
              <span>{LEGAL_DATA.razonSocial} (NIT: {LEGAL_DATA.nit})</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} style={{ color: "#D90429" }} />
              <span>Última actualización: {updatedAt}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} style={{ color: "#D90429" }} />
              <span>Cumplimiento Normativo Colombia</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── CUERPO DEL CONTENIDO LEGAL ───────────────────────── */}
      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Índice de navegación rápida si está disponible */}
          {toc && toc.length > 0 && (
            <nav
              aria-label="Índice de contenido"
              className="mb-10 p-5 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <h2
                className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3 flex items-center gap-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D90429]"></span>
                Índice de Secciones
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {toc.map((item, idx) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-gray-600 hover:text-[#D90429] transition-colors flex items-start gap-2 py-0.5"
                    >
                      <span className="text-gray-400 font-mono text-xs mt-0.5">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Contenedor del documento legal */}
          <article className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-gray-200 shadow-sm space-y-8 leading-relaxed text-gray-700 text-sm sm:text-base">
            {children}
          </article>

          {/* Tarjeta de Contacto Legal y Botón Inferior */}
          <div className="mt-10 p-6 sm:p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <h3
                  className="text-base sm:text-lg font-bold text-[#111111]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  ¿Tienes inquietudes sobre esta información legal?
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  El equipo administrativo y de atención al cliente de {LEGAL_DATA.nombreComercial} está a tu disposición.
                </p>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-wider font-bold py-3 px-5 rounded transition-all duration-200 hover:opacity-90 active:scale-95 flex-shrink-0"
                style={{
                  background: "#D90429",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <ArrowLeft size={14} />
                Volver al inicio
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-6 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#D90429] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-800">Correo Electrónico</span>
                  <a
                    href={`mailto:${LEGAL_DATA.correoContacto}`}
                    className="text-gray-500 hover:text-[#D90429] transition-colors"
                  >
                    {LEGAL_DATA.correoContacto}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#D90429] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-800">Línea de Atención</span>
                  <span className="text-gray-500">{LEGAL_DATA.telefono}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#D90429] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-800">Sede Comercial</span>
                  <span className="text-gray-500">{LEGAL_DATA.direccion}, {LEGAL_DATA.localidad}, {LEGAL_DATA.ciudad}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer y botón flotante */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
