// Seleciona os elementos do DOM
const display = document.getElementById('display');
const buttons = document.querySelectorAll('#calculator button');

let currentInput = '';
let operator = '';
let firstOperand = null;

// Adiciona o evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            // Limpar o display
            clearDisplay();
        } else if (buttonText === '=') {
            // Calcular o resultado
            calculate();
        } else if (isOperator(buttonText)) {
            // Armazena o operador e o primeiro operando
            setOperator(buttonText);
        } else {
            // Adiciona números e vírgula ao input atual
            appendToInput(buttonText);
        }
    });
});

// Função para limpar o display
function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    display.textContent = '0';
}

// Função para verificar se é um operador
function isOperator(value) {
    return ['+', '-', 'X', '/'].includes(value);
}

// Função para armazenar o operador e o primeiro operando
function setOperator(value) {
    if (currentInput === '') return; // Não faz nada se não houver input
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    }
    operator = value;
    currentInput = '';
}

// Função para adicionar números e vírgula ao input atual
function appendToInput(value) {
    if (value === ',' && currentInput.includes(',')) return; // Previne múltiplas vírgulas
    currentInput += value;
    display.textContent = currentInput;
}

// Função para calcular o resultado
function calculate() {
    if (firstOperand === null || currentInput === '') return; // Não faz nada se não houver operandos
    let secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case 'X':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    // Atualiza o display com o resultado
    display.textContent = result;
    // Reseta o estado
    currentInput = '';
    firstOperand = result; // Para permitir cálculos encadeados
    operator = '';
}
