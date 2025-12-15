// EXERCÍCIO 2: Contar propriedades de um objeto
// Use for...in para contar quantas propriedades existem no objeto

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata",
  automatico: true,
};

// Solução:
let contador = 0;
for (let propriedade in carro) {
  contador++;
}

console.log(`O objeto tem ${contador} propriedades`); // Deve exibir: 5
