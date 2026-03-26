// ============================================================================
// COMPONENTE NAVBAR - Barra de navegação
// ============================================================================
// Componente que cria uma barra de navegação fixa no topo.
// Muda de estilo ao fazer scroll (ativo/inativo).
// Permite navegação para diferentes seções da página.

import { useState, useEffect } from "react"; // useState: gerencia estado | useEffect: efeitos colaterais
import { FaHotel } from "react-icons/fa"; // Importa ícone de hotel da biblioteca react-icons
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  // ========================================================================
  // Estado do componente: 'scroll'
  // Armazena se o usuário fez scroll (true) ou está no topo (false)
  // ========================================================================
  const [scroll, setScroll] = useState(false);

  // ========================================================================
  // useEffect: Adiciona listener de scroll quando componente monta
  // ========================================================================
  useEffect(() => {
    // Função chamada a cada scroll do usuário
    function handleScroll() {
      // Se a posição vertical (scrollY) é maior que 50px, ativa estilo
      setScroll(window.scrollY > 50);
    }

    // Adiciona o evento de scroll à janela
    window.addEventListener("scroll", handleScroll);

    // Função de limpeza: remove o listener quando componente desmonta
    // Importante para evitar memory leaks e múltiplos listeners
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Array vazio [] significa que este efeito roda apenas uma vez (na montagem)

  // ========================================================================
  // Função para scroll suave até uma seção específica
  // ========================================================================
  function scrollToSection(id) {
    // Encontra o elemento com o id fornecido
    document
      .getElementById(id)
      // scrollIntoView: leva o elemento para a visão do usuário
      // behavior: "smooth" = scroll suave (ao invés de instantâneo)
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    // Navbar que muda de classe quando há scroll (condicional)
    // Quando scroll=true, adiciona classe "active" para aplicar estilos diferentes
    <nav className={scroll ? "navbar active" : "navbar"}>
      {/* Logo com ícone de hotel */}
      <h1>
        <FaHotel /> Hotel Lux
      </h1>

      {/* Menu de navegação */}
      <ul>
        {/* Cada li chama scrollToSection com o id correspondente */}
         <li>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => scrollToSection("sobre")}>Sobre</li>
        <li onClick={() => scrollToSection("cards")}>Quartos</li>
        <li onClick={() => scrollToSection("suporte")}>Suporte</li>
        <li>
          <Link to="/reserve">Reserva</Link>
        </li>
      </ul>
    </nav>
  );
}
