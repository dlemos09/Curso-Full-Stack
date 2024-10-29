// Importa o módulo 'inquirer', que permite fazer perguntas interativas no terminal.
const inquirer = require('inquirer');

// A função 'inquirer.prompt()' exibe um array de perguntas ao usuário e retorna as respostas.
// Aqui, estamos passando duas perguntas, uma para cada nota do aluno.
inquirer.prompt([
    {
        // Nome da primeira pergunta, que será usado para acessar a resposta posteriormente.
        name: 'p1',
        // Mensagem exibida no terminal ao usuário.
        message: 'Qual a primeira nota?'
    },
    {
        // Nome da segunda pergunta.
        name: 'p2',
        // Mensagem exibida no terminal ao usuário.
        message: 'Qual a segunda nota?',
    }
])
// Quando o usuário responde todas as perguntas, o método '.then()' é executado.
// Ele recebe as respostas no parâmetro 'answers' e executa o código dentro dele.
.then((answers) => {
    // Exibe o objeto 'answers' no console. Cada resposta pode ser acessada pelo nome da pergunta.
    console.log(answers);

    // Calcula a média das duas notas, convertendo-as para inteiros (com 'parseInt') antes de somar.
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;

    // Exibe a média do aluno no console.
    console.log(`A média do aluno é ${media}`);

})
// O '.catch()' captura possíveis erros que ocorram durante a execução do código dentro de '.then()'.
.catch((err) => {
    // Exibe o erro no console, caso ocorra.
    console.log(err);
});

//  é necessário instalar essa dependência (npm install inquirer@8.1.2).

