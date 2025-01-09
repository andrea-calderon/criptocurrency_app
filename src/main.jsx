import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import NotFound_404 from "./components/404.jsx";
import Cuadricula from "./components/Cuadricula.jsx";
import CryptoPage from "./components/CryptoPage.jsx";
import "./assets/styles/main.css";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/cryptocurrency" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=":id" element={<CryptoPage />} />
        </Route>
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </BrowserRouter>
  </>
);
