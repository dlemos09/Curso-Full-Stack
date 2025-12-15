// EXERCÍCIO 5: Converter strings para maiúsculas
// Use for...of para criar mensagens em maiúsculas

const mensagens = ["bom dia", "boa tarde", "boa noite", "até logo"];

// Solução:
console.log("Mensagens em maiúsculas:");
for (let mensagem of mensagens) {
  console.log(mensagem.toUpperCase());
}
