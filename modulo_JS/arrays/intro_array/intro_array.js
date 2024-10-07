// Trabalhando com Arrays

// Como declarar um array:

let numeros = [1, 2, 3] //Array de Number
let casa = ['Janela', 'Porta', 'Sala'] //Array de String
let misto = ['livro', 1, 'mesa', 2, true, ,] // No JavaScript é possível criar um array com mais de um tipo primitivo, mas não é uma boa prática.

/* O array possui indices assim como strings, logo o array anterior casa terá o elemento Janela no indice 0, 
o elemento porta no indice 1 e sala no indice 2 */

// 0        1        2
// casa = ['Janela', 'Porta', 'Sala'] 

// Para medir o tamanho(ou comprimento) do array utilizamos a propriedade .lenght

console.log(casa.length) // Retorna 3, isso mesmo retorna 3 porque inica do 0 até 2, logo 3 será o tamanho do array casa

// Podemos também declarar arrays como constates;
// A seguir será demonstraddo algumas propriedades de arrays

const alunos = ['Joaquim, Maria, Jonathan']
console.log(alunos) // Retorna -> [ 'Joaquim, Maria, Jonathan' ]

// ------------------------------------------------

alunos.unshift('Fabio') // O método .unshift adiciona um elemento no início do array
console.log(alunos) // Retorna [ 'Fabio', 'Joaquim, Maria, Jonathan' ]

// ------------------------------------------------

alunos.push('Katarina') // O método .push adiciona um elemento no final do array
console.log(alunos) // Retorna [ 'Fabio', 'Joaquim, Maria, Jonathan', 'Katarina' ]

// ------------------------------------------------

alunos.shift()// O método .shift remove um elemento no inicio do array
console.log(alunos) //Retorna [ 'Joaquim, Maria, Jonathan', 'Katarina' ]

// ------------------------------------------------

alunos.pop()// O método .shift remove um elemento no final do array
console.log(alunos) //Retorna [ 'Joaquim, Maria, Jonathan' ]

// ------------------------------------------------

// Importante lembrar que os métodos unshift e pop além de excluir o elemento, também move o índice do array

// ------------------------------------------------

// Podemos fazer a adicição do array da seguinte forma

alunos[1] = 'Chico'
console.log(alunos) // Retorna [ 'Joaquim, Maria, Jonathan', 'Chico' ]

// Podemos fazer a remoção do elemento do array da seguinte forma

delete alunos[1]
console.log(alunos) // Retorna [ 'Joaquim, Maria, Jonathan', <1 empty item> ] observe que o uso do delete não apagou o indice, o indice permanece mas o elemento Chico foi deletado, deixando o lugar vazio.

// Para remover o lugar vazio nesse caso, vamos utilizar o método pop novamente

alunos.pop()
console.log(alunos) // Retorna [ 'Joaquim, Maria, Jonathan' ]

// ------------------------------------------------

// Concatenação de arrays

// Vamos declarar dois arrays

let turmaA = ['Franginha', 'Cascão', 'Cebolinha']
let turmaB = ['Monica', 'Magali', 'Milena']

// iremos armazenar em outro array a concatenação da turmaA com turmaB

let escola = turmaA.concat(turmaB)
console.log(escola) // Retorna [ 'Franginha', 'Cascão', 'Cebolinha', 'Monica', 'Magali', 'Milena' ]

// ------------------------------------------------

// Também é possível declarar função utilizando a estrutura construtora 

let lojaRoupas = new Array() //  Esse método cria um array vazio sem elementos e é equivalente ao array literal [].

lojaRoupas = new Array(10) // Agora foi criado um array que só tem espaço para 10 elementos

// ------------------------------------------------

// É possível inverter a ordem do array utilizando o método reverse()

console.log(escola) // Retorna [ 'Franginha', 'Cascão', 'Cebolinha', 'Monica', 'Magali', 'Milena' ]
console.log(escola.reverse()) // Retorna [ 'Milena', 'Magali', 'Monica', 'Cebolinha', 'Cascão', 'Franginha' ]

// ------------------------------------------------

// É possível colocar em ordem alfabética utilizando o método sort()

console.log(escola)
console.log(escola.sort()) // Retorna [ 'Cascão', 'Cebolinha', 'Franginha', 'Magali', 'Milena', 'Monica' ]

// ------------------------------------------------

// É possível "partir" um array, ou retornar apenas um pedaço específico utilizando o método slice()

let turmaC = escola.slice(0, 3); // Note que foi utilizado o os indices 0 à 3 mas só foi impresso até o indice 2 logo, o método slice() determina o inicio e o penultimo indice. 
//               0          1             2
console.log(turmaC) // Retorna [ 'Cascão', 'Cebolinha', 'Franginha' ]

// ------------------------------------------------

//  O método Array.splice() é um método de uso geral para inserir ou remover elementos de um array. Ao contrário de slice() e concat(), splice() modifica o array em que é chamado. 

console.log(escola) // Retorna [ 'Cascão', 'Cebolinha', 'Franginha', 'Magali', 'Milena', 'Monica' ]
console.log(escola.splice(4)) // Retorna [ 'Milena', 'Monica' ]
console.log(escola) // Retorna [ 'Cascão', 'Cebolinha', 'Franginha', 'Magali' ]

// ------------------------------------------------

/* indexOf() e lastIndexOf() procuram um elemento com um valor especificado em um array e retor nam o índice do primeiro elemento encontrado com esse valor ou –1, se nenhum for encontrado. indexOf() pesquisa o array do início ao fim e lastIndexOf() pesquisa do fim para o início. */

console.log(escola.indexOf('Cascão')) // Retorna o indíce 0
console.log(escola.lastIndexOf('Magali')) // Retorna o indíce 3

// ------------------------------------------------

/*  Um array, assim como qualquer objeto de JavaScript, tem um método toString(). Para um array, esse método converte cada um de seus elementos em uma string (chamando os métodos toString() de seus elementos, se necessário) e produz na saída uma lista separada com vírgulas dessas strings. */

let tabuada = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(tabuada.toString()) // Retorna 2,4,6,8,10,12,14,16,18,20
