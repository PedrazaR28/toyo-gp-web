import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Componente que restablece el desplazamiento de la ventana hacia arriba
 * en cada cambio de ruta.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si hay un hash (#nosotros, #servicios, etc.), esperar un tick para hacer scroll al elemento
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // De lo contrario, ir arriba del todo
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}
