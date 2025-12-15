// EXERCÍCIO 10: Copiar objeto modificando valores
// Use for...in para criar uma cópia do objeto multiplicando valores numéricos por 2

const precos = {
  arroz: 25.0,
  feijao: 8.5,
  macarrao: 5.0,
  oleo: 12.0,
};

// Solução:
const precosReajustados = {};

for (let produto in precos) {
  precosReajustados[produto] = precos[produto] * 2;
}

console.log("Preços originais:", precos);
console.log("Preços reajustados (x2):", precosReajustados);
