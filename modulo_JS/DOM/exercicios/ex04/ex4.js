 // Seleciona o botão e o contêiner onde as notas serão adicionadas
 const botaoCriarNota = document.getElementById('criarNotaBtn');
 const containerNotas = document.getElementById('containerNotas');

 // Função que cria uma nova div como bloco de notas
 function criarNota() {
   // Cria um novo elemento div
   const novaNota = document.createElement('div');
   
   // Adiciona a classe 'note' para aplicar estilo
   novaNota.classList.add('note');
   
   // Torna a div editável, como se fosse um bloco de notas
   novaNota.contentEditable = true;
   
   // Define um texto padrão
   novaNota.innerText = 'Escreva sua nota aqui...';
   
   // Adiciona a nova div dentro do container de notas
   containerNotas.appendChild(novaNota);
 }

 // Adiciona o ouvinte de evento ao botão
 botaoCriarNota.addEventListener('click', criarNota);