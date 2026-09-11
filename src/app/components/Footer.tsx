import { Link } from "react-router";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logoToyoGP from "../../imports/LOGOTOYOGP-removebg-preview.png";
import LEGAL_DATA from "../../data/legalData";

const INSTAGRAM_URL = "https://www.instagram.com/toyo_gp/";

const LEGAL_LINKS = [
  { label: "Política de Privacidad", path: "/politica-privacidad" },
  { label: "Tratamiento de Datos Personales", path: "/tratamiento-datos-personales" },
  { label: "Términos y Condiciones", path: "/terminos-condiciones" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111111" }} className="pt-14 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logoToyoGP}
                alt="TOYO GP"
                className="h-12 w-auto object-contain"
              />
            </Link>
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
                <span>{LEGAL_DATA.telefono}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} style={{ color: "#D90429" }} />
                <a
                  href={`mailto:${LEGAL_DATA.correoContacto}`}
                  className="hover:text-white transition-colors"
                >
                  {LEGAL_DATA.correoContacto}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} style={{ color: "#D90429" }} />
                <span>{LEGAL_DATA.direccion}, {LEGAL_DATA.localidad}</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales y Legal */}
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
              <span>@toyo_gp</span>
            </a>

            <h4
              className="text-white mb-4 text-xs uppercase tracking-widest mt-6"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              Legal
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <span>© {new Date().getFullYear()} {LEGAL_DATA.nombreComercial}. Todos los derechos reservados.</span>
          <span>{LEGAL_DATA.localidad}, {LEGAL_DATA.ciudad}</span>
        </div>
      </div>
    </footer>
  );
}
