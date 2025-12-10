// Exercícios 2 - Condicionais e Funções (Resoluções)
function classificarNota(n) {
  if (n >= 9) return "Excelente";
  if (n >= 7) return "Bom";
  if (n >= 5) return "Regular";
  return "Insuficiente";
}
console.log(
  classificarNota(9),
  classificarNota(7.5),
  classificarNota(5),
  classificarNota(3)
);
const N = 50;
let somaFor = 0;
for (let i = 1; i <= N; i++) somaFor += i;
let somaWhile = 0,
  j = 1;
while (j <= N) {
  somaWhile += j;
  j++;
}
let somaDo = 0,
  k = 1;
do {
  somaDo += k;
  k++;
} while (k <= N);
console.log({ somaFor, somaWhile, somaDo });
const nomes = ["Ana", "Bruno", "Carla", "Daniel"];
for (let i = 0; i < nomes.length; i++) {
  console.log(i, nomes[i]);
}
for (const nome of nomes) {
  console.log(nome);
}
nomes.forEach((nome, i) => console.log(i, nome));
function saudar(nome = "Visitante") {
  return `Olá, ${nome}!`;
}
console.log(saudar("João"), saudar());
function gerarAleatorio() {
  return Math.random();
}
function somar(a, b) {
  return a + b;
}
console.log(gerarAleatorio(), gerarAleatorio(), somar(2, 3), somar(2, 3));
