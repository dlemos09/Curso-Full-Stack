// Enunciado: Implemente um selection sort simples com for (didático, não usar sort nativo). Mostre o array ordenado.

// Solução comentada
function selectionSort(arr) {
  const a = arr.slice(); // copia para não alterar original
  for (let i = 0; i < a.length - 1; i++) {
    let menorIdx = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[menorIdx]) menorIdx = j;
    }
    // troca a[i] com a[menorIdx]
    const temp = a[i];
    a[i] = a[menorIdx];
    a[menorIdx] = temp;
  }
  return a;
}
console.log(selectionSort([64, 25, 12, 22, 11])); // [11,12,22,25,64]
