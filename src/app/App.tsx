import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  Car,
  Shield,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Wrench,
  CheckCircle,
  Instagram,
} from "lucide-react";
import logoToyoGP from "../imports/LOGOTOYOGP-removebg-preview.png";

const WHATSAPP_NUMBER = "573228190056";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, estoy interesado en recibir información sobre los servicios y vehículos disponibles de TOYO GP."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const MERCADO_LIBRE_URL = "https://vehiculos.tucarro.com.co/_CustId_206072185?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnp13uraTXqD-ml3O6wCJbp6DBGCzPcng1QkSPnOUpchD6djoxxHKSQZtUXiY_aem_BDw_EM961vz4V8oSullXnA";
const INSTAGRAM_URL = "https://www.instagram.com/toyo_gp/";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Vehículos", href: "#vehiculos" },
  { label: "Trámites", href: "#tramites" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    icon: Car,
    title: "Compra y Venta de Vehículos",
    description:
      "Ofrecemos una amplia selección de vehículos Toyota usados con respaldo de calidad. Encuentra el vehículo perfecto para ti con total transparencia.",
  },
  {
    icon: TrendingUp,
    title: "Retoma como Parte de Pago",
    description:
      "Recibimos tu vehículo actual como parte de pago para facilitar la adquisición de tu próximo Toyota. Evaluación justa y proceso ágil.",
  },
  {
    icon: FileText,
    title: "Trámites Vehiculares",
    description:
      "Gestionamos todos los trámites vehiculares a nivel nacional: traspasos, levantamiento de prenda, matrículas y más.",
  },
  {
    icon: Users,
    title: "Asesoría Personalizada",
    description:
      "Nuestro equipo de asesores te acompaña durante todo el proceso comercial, garantizando una experiencia profesional y transparente.",
  },
];

const TRAMITES = [
  "Traspasos",
  "Levantamiento de prenda",
  "Matrículas",
  "Cambio de características",
  "Duplicados",
  "Gestión documental",
  "Otros trámites de tránsito a nivel nacional",
];

const INTEREST_OPTIONS = [
  "Comprar vehículo",
  "Vender vehículo",
  "Retoma de vehículo",
  "Trámite vehicular",
  "Información general",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    celular: "",
    email: "",
    ciudad: "",
    interes: "",
    mensaje: "",
    autorizo: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase.from("clientes").insert([
    {
      nombre: form.nombre,
      telefono: form.celular,
      correo: form.email,
      ciudad: form.ciudad,
      tipo_interes: form.interes,
      mensaje: form.mensaje,
    },
  ]);

  if (error) {
    console.error("Error al guardar:", error);
    alert("Ocurrió un error al enviar la información.");
    return;
  }

  setSubmitted(true);

  setForm({
    nombre: "",
    celular: "",
    email: "",
    ciudad: "",
    interes: "",
    mensaje: "",
    autorizo: false,
  });
};

  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111111] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNav(e, "#inicio")}
              className="flex items-center select-none"
            >
              <img
                src={logoToyoGP}
                alt="TOYO GP"
                className="h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className="text-white/80 hover:text-white text-sm uppercase tracking-wide transition-colors duration-200"
                  style={{ fontWeight: 500 }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* CTA – Instagram en header desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded text-white text-sm uppercase tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                }}
              >
                <Instagram size={16} />
                @toyo_gp
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#111111] border-t border-white/10 px-4 py-4">
            <nav className="flex flex-col gap-3 mb-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className="text-white/80 hover:text-white py-2 text-sm uppercase tracking-wide transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded text-white text-sm uppercase"
              style={{ background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)", fontWeight: 600 }}
            >
              <Instagram size={16} />
              @toyo_gp en Instagram
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#111111" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1641333326784-24a9c21d3c4e?w=1800&h=1000&fit=crop&auto=format')",
            filter: "brightness(0.35)",
          }}
        />
        {/* Red accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "#D90429" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="flex justify-center mb-8">
            <img
              src={logoToyoGP}
              alt="TOYO GP"
              className="w-auto object-contain"
              style={{ height: "clamp(8rem, 15vw, 12rem)" }}
            />
          </div>
          <p
            className="text-white/90 mb-3"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              letterSpacing: "0.05em",
            }}
          >
            Especialistas en vehículos Toyota usados
          </p>
          <p
            className="text-white/60 mb-10 max-w-xl mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.7 }}
          >
            Más de 10 años de experiencia comercial en el sector automotor.
            <br />
            Empresa colombiana fundada en 2021.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#vehiculos"
              onClick={(e) => handleNav(e, "#vehiculos")}
              className="flex items-center justify-center gap-2 px-8 py-4 text-white uppercase tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "#D90429",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
              }}
            >
              Ver Vehículos Disponibles
              <ArrowRight size={16} />
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNav(e, "#contacto")}
              className="flex items-center justify-center gap-2 px-8 py-4 text-white uppercase tracking-wide border border-white/30 hover:border-white/70 transition-all duration-200"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
              }}
            >
              Contactar Asesor
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* ── TRUST INDICATORS ────────────────────────────────── */}
      <section style={{ background: "#111111" }} className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { num: "+10 Años", sub: "Experiencia Comercial", icon: Award },
              { num: "Desde 2021", sub: "Construyendo Confianza", icon: Shield },
              { num: "Especialistas", sub: "En Vehículos Toyota", icon: Star },
              { num: "Cobertura", sub: "Nacional", icon: MapPin },
            ].map((item) => (
              <div
                key={item.sub}
                className="flex flex-col items-center justify-center py-10 px-6 text-center"
                style={{ background: "#111111" }}
              >
                <item.icon size={28} style={{ color: "#D90429" }} className="mb-3" />
                <span
                  className="block text-white mb-1"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                    color: "#D90429",
                  }}
                >
                  {item.num}
                </span>
                <span
                  className="block text-white/60 uppercase tracking-wide"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}
                >
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSOTROS ────────────────────────────────────────── */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1686082344567-6f0dbee591f5?w=800&h=600&fit=crop&auto=format"
                alt="Vehículo Toyota TOYO GP"
                className="w-full object-cover"
                style={{ height: "480px" }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 flex flex-col items-center justify-center text-white text-center"
                style={{ background: "#D90429" }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    lineHeight: 1,
                  }}
                >
                  10+
                </span>
                <span className="text-xs uppercase tracking-wide mt-1">
                  Años de
                  <br />
                  Experiencia
                </span>
              </div>
            </div>

            {/* Text column */}
            <div>
              <div
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#D90429", fontWeight: 600 }}
              >
                ¿Quiénes Somos?
              </div>
              <h2
                className="text-[#111111] mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  lineHeight: 1.15,
                }}
              >
                Empresa colombiana con
                <br />
                <span style={{ color: "#D90429" }}>experiencia y confianza</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                TOYO GP es una empresa colombiana fundada en 2021, especializada en la
                comercialización de vehículos usados, con enfoque principal en la marca Toyota.
                Nuestro equipo de asesores comerciales cuenta con más de 10 años de experiencia en
                el sector automotor, brindando acompañamiento profesional, transparencia y confianza
                durante todo el proceso de compra, venta o retoma de vehículos.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Misión",
                    text: "Brindar soluciones integrales en la comercialización de vehículos usados y la gestión de trámites vehiculares, ofreciendo un servicio transparente, profesional y respaldado por la experiencia de nuestro equipo.",
                  },
                  {
                    title: "Visión",
                    text: "Ser una empresa reconocida a nivel nacional por la confianza, calidad de servicio y profesionalismo en la comercialización de vehículos usados y soluciones automotrices.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 border-l-2"
                    style={{ borderColor: "#D90429", background: "#F5F5F5" }}
                  >
                    <h4
                      className="mb-2"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        color: "#111111",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ───────────────────────────────────────── */}
      <section id="servicios" className="py-24" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#D90429", fontWeight: 600 }}
            >
              Lo que hacemos
            </div>
            <h2
              className="text-[#111111]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              }}
            >
              Nuestros Servicios
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="group bg-white p-7 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderBottom: "3px solid transparent" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderBottomColor = "#D90429")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderBottomColor = "transparent")
                }
              >
                <div
                  className="w-12 h-12 rounded flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#D90429]"
                  style={{ background: "#111111" }}
                >
                  <svc.icon size={22} color="#fff" />
                </div>
                <h3
                  className="text-[#111111] mb-3"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEHÍCULOS DISPONIBLES ────────────────────────────── */}
      <section
        id="vehiculos"
        className="relative py-32 flex items-center overflow-hidden"
        style={{ background: "#111111" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596682223547-d554f156f38e?w=1800&h=900&fit=crop&auto=format')",
            filter: "brightness(0.25)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#D90429", fontWeight: 600 }}
          >
            Inventario
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Vehículos Disponibles
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Nuestro inventario se encuentra actualizado permanentemente en Mercado Libre. Encuentra
            el vehículo Toyota ideal para ti con precios competitivos y respaldo profesional.
          </p>
          <a
            href={MERCADO_LIBRE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-white uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "#D90429",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
            }}
          >
            Ver Inventario Actualizado
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ── TRÁMITES ────────────────────────────────────────── */}
      <section id="tramites" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#D90429", fontWeight: 600 }}
              >
                Gestión vehicular
              </div>
              <h2
                className="text-[#111111] mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  lineHeight: 1.15,
                }}
              >
                Trámites Vehiculares
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos encargamos de todos los trámites vehiculares a nivel nacional. Con TOYO GP,
                olvídate de las filas y el papeleo — nosotros lo hacemos por ti.
              </p>
              <ul className="space-y-3">
                {TRAMITES.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} style={{ color: "#D90429", flexShrink: 0 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1686082344408-90a9d712da90?w=700&h=560&fit=crop&auto=format"
                alt="Trámites vehiculares TOYO GP"
                className="w-full object-cover"
                style={{ height: "420px" }}
              />
              <div
                className="absolute top-6 -left-6 px-6 py-4 text-white text-sm"
                style={{ background: "#D90429" }}
              >
                <Wrench size={24} className="mb-1" />
                <span
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, display: "block" }}
                >
                  Cobertura
                </span>
                <span className="text-white/80">A nivel nacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REDES SOCIALES ──────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "#111111" }}
      >
        {/* Decorative gradient blobs */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle,#833ab4,transparent 70%)" }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle,#fcb045,transparent 70%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#D90429", fontWeight: 600 }}
          >
            Síguenos
          </div>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Estamos en Instagram
          </h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            Sigue nuestra cuenta para ver las últimas novedades, vehículos disponibles y consejos del mundo Toyota.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-white uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
            style={{
              background: "linear-gradient(135deg,#833ab4 0%,#fd1d1d 50%,#fcb045 100%)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "4px",
            }}
          >
            <Instagram size={22} />
            @toyo_gp
            <ArrowRight size={18} />
          </a>
          <p className="text-white/30 text-xs mt-6 uppercase tracking-widest">
            ¡Únete a nuestra comunidad!
          </p>
        </div>
      </section>

      {/* ── FORMULARIO ──────────────────────────────────────── */}
      <section id="contacto" className="py-24" style={{ background: "#F5F5F5" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#D90429", fontWeight: 600 }}
            >
              Contáctanos
            </div>
            <h2
              className="text-[#111111]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              }}
            >
              Solicita Asesoría
            </h2>
          </div>

          {submitted ? (
            <div className="bg-white p-12 text-center">
              <CheckCircle size={48} style={{ color: "#D90429", margin: "0 auto 1rem" }} />
              <h3
                className="text-[#111111] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.4rem" }}
              >
                ¡Solicitud recibida!
              </h3>
              <p className="text-gray-500">
                Nuestro equipo de asesores se comunicará contigo muy pronto.
              </p>
              <button
                className="mt-6 px-6 py-3 text-white text-sm uppercase tracking-wide"
                style={{ background: "#D90429", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                onClick={() => setSubmitted(false)}
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D90429] transition-colors"
                    placeholder="Juan García"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Número de celular *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.celular}
                    onChange={(e) => setForm({ ...form, celular: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D90429] transition-colors"
                    placeholder="+57 300 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D90429] transition-colors"
                    placeholder="juan@correo.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Ciudad *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.ciudad}
                    onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D90429] transition-colors"
                    placeholder="Bogotá"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Tipo de interés *
                </label>
                <select
                  required
                  value={form.interes}
                  onChange={(e) => setForm({ ...form, interes: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D90429] transition-colors bg-white"
                >
                  <option value="">Selecciona una opción</option>
                  {INTEREST_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Mensaje
                </label>
                <textarea
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D90429] transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu consulta..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  required
                  type="checkbox"
                  id="autorizo"
                  checked={form.autorizo}
                  onChange={(e) => setForm({ ...form, autorizo: e.target.checked })}
                  className="mt-1 accent-[#D90429]"
                />
                <label htmlFor="autorizo" className="text-gray-500 text-xs leading-relaxed">
                  Autorizo el tratamiento de mis datos personales conforme a la Ley 1581 de 2012 y
                  la Política de Tratamiento de Datos Personales de TOYO GP. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white uppercase tracking-widest text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
                style={{
                  background: "#D90429",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}
              >
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── UBICACIÓN ───────────────────────────────────────── */}
      <section id="ubicacion" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#D90429", fontWeight: 600 }}
            >
              Encuéntranos
            </div>
            <h2
              className="text-[#111111]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              }}
            >
              Nuestra Ubicación
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Dirección",
                  value: "Av. El Dorado #68C - 61",
                  sub: "Fontibón, Bogotá, Cundinamarca",
                },
                {
                  icon: Clock,
                  label: "Horario de atención",
                  value: "Lunes – Viernes: 9:00 am – 4:00 pm",
                  sub: "Sábados: 9:00 am – 1:00 pm",
                },
                {
                  icon: Phone,
                  label: "Teléfono / WhatsApp",
                  value: "+57 322 819 0056",
                  sub: "Respuesta inmediata por WhatsApp",
                },
                {
                  icon: Mail,
                  label: "Correo electrónico",
                  value: "usadosgp@gmail.com",
                  sub: "Respondemos en menos de 24 horas",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: "#D90429" }}
                  >
                    <item.icon size={18} color="#fff" />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide text-gray-400 mb-0.5"
                      style={{ fontWeight: 600 }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-[#111111]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      {item.value}
                    </p>
                    <p className="text-gray-400 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
              <iframe
                title="Ubicación TOYO GP"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7047429889687!2d-74.15245552476308!3d4.673794495346684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e8f8e8f8e8f%3A0x8e8f8e8f8e8f8e8f!2sAv.%20El%20Dorado%20%2368C-61%2C%20Fontib%C3%B3n%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1717600000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: "#111111" }} className="pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            {/* Brand */}
            <div>
              <img
                src={logoToyoGP}
                alt="TOYO GP"
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-white/50 text-sm leading-relaxed">
                Especialistas en vehículos Toyota usados.
                <br />
                Más de 10 años de experiencia comercial.
                <br />
                Empresa fundada en 2021.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-white mb-4 text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Contacto
              </h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={14} style={{ color: "#D90429" }} />
                  +57 322 819 0056
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} style={{ color: "#D90429" }} />
                  usadosgp@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: "#D90429" }} />
                  Av. El Dorado #68C - 61, Fontibón
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4
                className="text-white mb-4 text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Síguenos
              </h4>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-3"
              >
                <Instagram size={18} style={{ color: "#D90429" }} />
                @toyo_gp
              </a>
              <h4
                className="text-white mb-4 text-xs uppercase tracking-widest mt-6"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Legal
              </h4>
              <ul className="space-y-2 text-white/50 text-sm">
                {["Política de Privacidad", "Tratamiento de Datos Personales", "Términos y Condiciones"].map(
                  (l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-white transition-colors">
                        {l}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
            <span>© {new Date().getFullYear()} TOYO GP. Todos los derechos reservados.</span>
            <span>Fontibón, Bogotá, Colombia</span>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ────────────────────────────────── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: "#25D366" }}
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
