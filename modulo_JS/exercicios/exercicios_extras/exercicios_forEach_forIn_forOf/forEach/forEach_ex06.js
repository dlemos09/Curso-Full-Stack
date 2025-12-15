// EXERCÍCIO 6: Criar lista HTML
// Use forEach para criar uma string com tags <li> para cada item

const compras = ["Arroz", "Feijão", "Macarrão", "Tomate"];
let listaHTML = "";

// Solução:
compras.forEach(function (item) {
  listaHTML += `<li>${item}</li>\n`;
});

console.log("Lista de compras:");
console.log("<ul>");
console.log(listaHTML);
console.log("</ul>");
