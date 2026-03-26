import { useState } from "react";
import "../styles/reserve.css";

export default function Reserve() {
  // Estado único do formulário para controlar todos os campos em um só objeto.
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    checkin: "",
    checkout: "",
    hospedes: 1,
    observacoes: "",
  });

  // Atualiza dinamicamente o campo alterado com base no atributo name.
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Intercepta o submit padrão, simula envio e limpa o formulário.
  function handleSubmit(event) {
    event.preventDefault();
    alert("Reserva enviada com sucesso! Entraremos em contato em breve.");

    setFormData({
      nome: "",
      email: "",
      checkin: "",
      checkout: "",
      hospedes: 1,
      observacoes: "",
    });
  }

  return (
    // Estrutura principal da página de reserva.
    <main className="reserve-page">
      <section className="reserve-card">
        <h2>Reserve sua estadia</h2>
        <p>Preencha os dados abaixo para solicitar sua reserva no Hotel Lux.</p>

        {/* Formulário controlado: todos os valores vêm do estado formData. */}
        <form className="reserve-form" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="reserve-grid">
            <div>
              <label htmlFor="checkin">Check-in</label>
              <input
                id="checkin"
                name="checkin"
                type="date"
                value={formData.checkin}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="checkout">Check-out</label>
              <input
                id="checkout"
                name="checkout"
                type="date"
                value={formData.checkout}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label htmlFor="hospedes">Quantidade de hospedes</label>
          <input
            id="hospedes"
            name="hospedes"
            type="number"
            min="1"
            max="10"
            value={formData.hospedes}
            onChange={handleChange}
            required
          />

          <label htmlFor="observacoes">Observacoes</label>
          <textarea
            id="observacoes"
            name="observacoes"
            rows="4"
            value={formData.observacoes}
            onChange={handleChange}
            placeholder="Ex.: preferencia de quarto, horarios, solicitacoes especiais"
          />

          <button type="submit">Enviar reserva</button>
        </form>
      </section>
    </main>
  );
}
