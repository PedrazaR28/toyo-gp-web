import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Instagram } from "lucide-react";
import logoToyoGP from "../../imports/LOGOTOYOGP-removebg-preview.png";

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

interface HeaderProps {
  /** Fuerza un fondo oscuro sólido (por ejemplo, en páginas legales secundarias) */
  forceSolid?: boolean;
}

export default function Header({ forceSolid = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname === "/") {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Si estamos en una página legal, navegar a la ruta principal con el hash
      navigate(`/${href}`);
    }
  };

  const isSolid = forceSolid || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-[#111111] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center select-none"
          >
            <img
              src={logoToyoGP}
              alt="TOYO GP"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-white/80 hover:text-white text-sm uppercase tracking-wide transition-colors duration-200 cursor-pointer"
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
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-white/80 hover:text-white py-2 text-sm uppercase tracking-wide transition-colors cursor-pointer"
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
  );
}
