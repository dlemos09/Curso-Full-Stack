// ============================================================================
// COMPONENTE FOOTER - Rodapé/Seção de Suporte
// ============================================================================
// Componente simples que funciona como rodapé/seção de contato.
// Exibe informações de suporte e email para contato.

import "../styles/footer.css";

export default function Footer() {
  return (
    // Seção com id="suporte" para navegação por âncora (usado na Navbar)
    <section id="suporte">
      {/* Título do rodapé */}
      <h2>Suporte</h2>

      {/* Email de contato */}
      <p>Email: suporte@hotellux.com</p>
    </section>
  );
}
