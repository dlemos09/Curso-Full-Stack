// ============================================================================
// COMPONENTE APP - Estrutura principal da aplicação
// ============================================================================
// Este é o componente raiz que organiza toda a estrutura do site.
// Aqui importamos todos os componentes e os renderizamos em sequência.

import Navbar from "./components/Navbar"; // Barra de navegação fixa no topo
import Hero from "./components/Hero"; // Seção de boas-vindas/banner principal
import Cards from "./components/Cards"; // Cards com recursos do hotel
import Footer from "./components/Footer"; // Rodapé/seção de suporte
import Reserve from "./pages/Reserve";
import { Route, Routes } from "react-router-dom";
import "./styles/home.css";

function Home() {
  return (
    <>
      {/* Componente Hero: Banner/seção de apresentação */}
      <Hero />

      {/* Seção Sobre: Descrição breve do hotel */}
      <section id="sobre">
        {/* id="sobre" permite navegação por âncora (usado na Navbar) */}
        <h2>Sobre</h2>
        <p>Somos referência em hotelaria de luxo.</p>
      </section>

      {/* Componente Cards: Cards com recursos como Wi-Fi, piscina, café */}
      <Cards />

      {/* Componente Footer: Rodapé com informações de suporte */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      {/* Fragment (<> </>) é usado para renderizar múltiplos elementos sem envolvê-los em una div extra */}

      {/* Componente Navbar: Navegação com logo e menu */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  );
}

export default App;
