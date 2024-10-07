// Objeto pessoa
const pessoa = {
    nome: "Douglas",
    idade: 28,
    // Objeto endereço dentro de pessoa
    endereco: {
      rua: "Alameda dos Anjos",
      numero: 403,
      cidade: "Natal",
      estado: "RN"
    }
  };
  
  // Acessando propriedades do objeto pessoa
  console.log(pessoa.nome);         // Exibe "Douglas"
  console.log(pessoa.idade);        // Exibe 28
  
  // Acessando propriedades do objeto endereco dentro de pessoa
  console.log(pessoa.endereco.rua);     // Exibe "Alamenda dos Anjos"
  console.log(pessoa.endereco.cidade);  // Exibe "Natal"
  