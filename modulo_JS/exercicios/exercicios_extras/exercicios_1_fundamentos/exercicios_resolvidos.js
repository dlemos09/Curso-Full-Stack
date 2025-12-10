// Exercícios 1 - Fundamentos (Resoluções Consolidadas)

// 1. Tipos e typeof
const texto = "Olá";
const numero = 42;
const ativo = true;
let indefinido;
const vazio = null;
const id = Symbol("id_unico");
console.log(texto, typeof texto);
console.log(numero, typeof numero);
console.log(ativo, typeof ativo);
console.log(indefinido, typeof indefinido);
console.log(vazio, typeof vazio); // 'object' bug histórico
console.log(id, typeof id);

// 2. Conversões
const entrada = "42";
const valor = "3.14";
const inteiro = parseInt(entrada, 10);
const flutuante = parseFloat(valor);
console.log(Number.isNaN(inteiro));
console.log(Number.isNaN(flutuante));
console.log(Number.isNaN(Number("abc")));
console.log(String(inteiro));

// 3. Operadores lógicos
console.log(true && 5 > 3);
console.log(false || 10 === 10);
console.log(!false);
console.log(true && 2 > 5);
console.log(false || 3 > 10);
console.log(!true);
let contador = 0;
function incr() {
  contador++;
  return true;
}
console.log(false && incr());
console.log(true || incr());
console.log("contador:", contador);

// 4. Template literal
const pessoa = { nome: "Ana", idade: 28, cidade: "Recife" };
console.log(
  `Meu nome é ${pessoa.nome},\ntenho ${pessoa.idade} anos e moro em ${
    pessoa.cidade
  }.\nDaqui a 5 anos terei ${pessoa.idade + 5}.`
);

// 5. Comparações
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
