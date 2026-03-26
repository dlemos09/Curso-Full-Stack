// ============================================================================
// COMPONENTE CARDS - Seção de destaques/recursos do hotel
// ============================================================================
// Este componente exibe 3 cards com os principais recursos do hotel:
// Wi-Fi, Piscina e Café da manhã.
// Cada card tem uma imagem de fundo, ícone e texto descritivo.
// Animações ao passar o mouse (hover) para melhor UX.

// Importa ícones da biblioteca react-icons
import { FaWifi, FaSwimmingPool, FaCoffee } from "react-icons/fa";
import "../styles/cards.css";

export default function Cards() {
  return (
    // Seção com id="cards" para navegação por âncora (usado na Navbar)
    // Todos os cards estão dentro desta seção
    <section id="cards" className="cards">
      {/* Título da seção */}
      <h2>Quartos</h2>

      {/* Container que organiza os cards em flexbox */}
      <div className="card-container">
        {/* ================================================================ */}
        {/* CARD 1: Wi-Fi Grátis */}
        {/* ================================================================ */}
        <div className="card card1">
          {/* Overlay: camada escura que cobre a imagem de fundo */}
          {/* Contém o ícone, título e descrição do card */}
          <div className="overlay">
            {/* FaWifi: Ícone de Wi-Fi */}
            <FaWifi className="icon" />
            {/* Título do card */}
            <h3>Wi-Fi grátis</h3>
            {/* Descrição do card */}
            <p>Internet de alta velocidade</p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* CARD 2: Piscina */}
        {/* ================================================================ */}
        <div className="card card2">
          <div className="overlay">
            {/* FaSwimmingPool: Ícone de piscina */}
            <FaSwimmingPool className="icon" />
            <h3>Piscina</h3>
            <p>Área de lazer completa</p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* CARD 3: Café da Manhã */}
        {/* ================================================================ */}
        <div className="card card3">
          <div className="overlay">
            {/* FaCoffee: Ícone de xícara de café */}
            <FaCoffee className="icon" />
            <h3>Café da manhã</h3>
            <p>Incluso em todas as diárias</p>
          </div>
        </div>
      </div>
    </section>
  );
}
