// Receba a altura e o peso de uma pessoa e calcule seu Índice de Massa Corporal (IMC). Exiba uma mensagem indicando se ela está abaixo do peso, no peso normal, com sobrepeso ou com obesidade.

let peso = 75; // em kg
let altura = 1.8; // em metros
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso. IMC: " + imc.toFixed(2));
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal. IMC: " + imc.toFixed(2));
} else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso. IMC: " + imc.toFixed(2));
} else {
    console.log("Obesidade. IMC: " + imc.toFixed(2));
}

// 3. Verificação de triângulo
// Escreva um programa que receba três valores como os lados de um triângulo e determine se eles podem formar um triângulo válido. Além disso, verifique se o triângulo é equilátero, isósceles ou escaleno.



let lado1 = 3;
let lado2 = 4;
let lado3 = 5;

if (lado1 < 0 || lado1 > 10 || lado2 > 0 || lado2 < 10 || lado3 < 0 || lado3 > 10) {
    console.log('Digite números entre 0 e 10')
}

else if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}


// 4. Cálculo de tarifa de energia
// Crie um programa que calcule o valor da tarifa de energia elétrica com base no consumo em kWh. As tarifas são:

// Até 100 kWh: R$ 0,50 por kWh
// De 101 a 200 kWh: R$ 0,75 por kWh
// Acima de 200 kWh: R$ 1,00 por kWh



let consumo = 250; // em kWh
let valorTotal = 0;

if (consumo <= 100) {
    valorTotal = consumo * 0.50;
} else if (consumo <= 200) {
    valorTotal = (100 * 0.50) + ((consumo - 100) * 0.75);
} else {
    valorTotal = (100 * 0.50) + (100 * 0.75) + ((consumo - 200) * 1.00);
}

console.log("O valor total da conta de energia é: R$ " + valorTotal.toFixed(2));


// 5. Cálculo de imposto de renda
// Escreva um programa que calcule o imposto de renda de uma pessoa com base no seu salário mensal, seguindo as faixas:

// Até R$ 2.000: isento
// De R$ 2.001 a R$ 3.500: 10% de imposto
// De R$ 3.501 a R$ 5.000: 20% de imposto
// Acima de R$ 5.000: 30% de imposto


let salario = 4000; // Salário mensal em R$
let imposto = 0;

if (salario <= 2000) {
    imposto = 0;
} else if (salario <= 3500) {
    imposto = (salario - 2000) * 0.10;
} else if (salario <= 5000) {
    imposto = (1500 * 0.10) + ((salario - 3500) * 0.20);
} else {
    imposto = (1500 * 0.10) + (1500 * 0.20) + ((salario - 5000) * 0.30);
}

console.log("O imposto de renda devido é: R$ " + imposto.toFixed(2));
