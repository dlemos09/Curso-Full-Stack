// ============================================================================
// COMPONENTE HERO - Seção de apresentação principal
// ============================================================================
// Este componente cria a seção "Hero" - um banner grande e impactante
// que é a primeira coisa que o visitante vê ao entrar no site.
// Usa uma imagem de fundo e faz uma apresentação do hotel.

import "../styles/hero.css";

export default function Hero() {
  return (
    // Seção com classe "hero" (estilos em index.css)
    // Height: 100vh = altura da viewport (ocupará a tela inteira)
    // Contém título e subtítulo bem posicionados
    <section className="hero">
      {/* Título principal do site */}
      <h1>Bem-vindo ao Hotel Lux</h1>

      {/* Subtítulo/descrição */}
      <p>Conforto, elegância e a melhor experiência</p>
    </section>
  );
}
