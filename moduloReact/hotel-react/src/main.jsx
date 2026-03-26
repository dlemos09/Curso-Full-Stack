// ============================================================================
// ENTRY POINT DO APLICATIVO - Ponto de entrada principal
// ============================================================================
// Este arquivo é o primeiro a ser executado quando o aplicativo inicia.
// Ele responsável por renderizar o componente raiz (App) no DOM.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css"; // Importa os estilos globais do projeto
import App from "./App.jsx"; // Importa o componente principal da aplicação
import { BrowserRouter } from "react-router-dom";

// ============================================================================
// createRoot: Cria a raiz do React no DOM
// getElementById('root'): Encontra a div com id="root" no index.html
// ============================================================================
createRoot(document.getElementById("root")).render(
  // StrictMode: Ativa verificações adicionais em modo desenvolvimento
  // para ajudar a encontrar problemas potenciais (sem afetar produção)
  <StrictMode>
    <BrowserRouter>
      <App /> {/* Renderiza o componente App como elemento raiz */}
    </BrowserRouter>
  </StrictMode>,
);
