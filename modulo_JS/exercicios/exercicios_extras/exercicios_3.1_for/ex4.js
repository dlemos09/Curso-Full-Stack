// Enunciado: De 1 a 15, imprima "3 - par" ou "7 - ímpar" (exemplo) — ou seja, número seguido de "par" ou "ímpar".

// Solução comentada
for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " - par");
  } else {
    console.log(i + " - ímpar");
  }
}
