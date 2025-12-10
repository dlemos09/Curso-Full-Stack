// Enunciado: contaPalavras(arrayDeStrings) retorna um objeto com a contagem de quantas vezes cada palavra aparece. Ex.: ['oi','ola','oi'] → { oi: 2, ola: 1 }.

// Solução comentada
function contaPalavras(arr) {
  const contagem = {};
  for (let i = 0; i < arr.length; i++) {
    const palavra = arr[i];
    if (contagem[palavra]) {
      contagem[palavra] += 1;
    } else {
      contagem[palavra] = 1;
    }
  }
  return contagem;
}
console.log(contaPalavras(['oi','ola','oi'])); // { oi: 2, ola: 1 }
