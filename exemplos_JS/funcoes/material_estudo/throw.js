
function verificarNumero(numero) {
    if (typeof numero !== 'number') {
      throw new Error("O valor fornecido não é um número"); // Lança um erro personalizado
    }
    return "O número é válido";
  }
  
  try {
    console.log(verificarNumero(42));  // O número é válido
    console.log(verificarNumero("42")); // Lançará um erro
  } catch (erro) {
    console.error(erro.message); // Captura e exibe a mensagem do erro: "O valor fornecido não é um número"
  }
  