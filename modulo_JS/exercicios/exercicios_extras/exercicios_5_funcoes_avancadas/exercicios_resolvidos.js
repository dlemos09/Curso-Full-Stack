// Exercícios 5 - Funções Avançadas (Resoluções)
const usuario = {
  nome: "Maria",
  saudacao() {
    return `Olá, ${this.nome}`;
  },
};
console.log(usuario.saudacao());
const ref = usuario.saudacao;
try {
  console.log(ref());
} catch (e) {
  console.log("Perda de contexto");
}
const corrigido = usuario.saudacao.bind(usuario);
console.log(corrigido());
function contador() {
  let n = 0;
  return () => {
    n++;
    return n;
  };
}
const c1 = contador();
const c2 = contador();
console.log(c1(), c1(), c2());
function somaNormal(a, b, c) {
  return a + b + c;
}
function somaCurried(a) {
  return (b) => (c) => a + b + c;
}
console.log(somaNormal(1, 2, 3), somaCurried(1)(2)(3));
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
const log = debounce((m) => console.log("Executou:", m), 300);
log("A");
log("B");
log("C");
