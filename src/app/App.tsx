import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import PoliticaPrivacidadPage from "./pages/PoliticaPrivacidadPage";
import TratamientoDatosPage from "./pages/TratamientoDatosPage";
import TerminosCondicionesPage from "./pages/TerminosCondicionesPage";

export default function App() {
  return (
    <BrowserRouter>
      {/* Restablece la posición de lectura en la parte superior en cada cambio de ruta */}
      <ScrollToTop />
      <Routes>
        {/* Página principal con todas las secciones de TOYO GP */}
        <Route path="/" element={<HomePage />} />

        {/* Páginas legales independientes */}
        <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
        <Route path="/tratamiento-datos-personales" element={<TratamientoDatosPage />} />
        <Route path="/terminos-condiciones" element={<TerminosCondicionesPage />} />

        {/* Redirección ante cualquier ruta inexistente */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
