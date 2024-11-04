// Define a função 'a', que exibe uma mensagem no console indicando que a função 'a' está sendo executada.
function a() {
    console.log('Executando a()')
}

// Define a função 'b', que exibe uma mensagem no console indicando que a função 'b' está sendo executada.
function b() {
    console.log('Executando b()')
}

// Define a função 'c', que exibe uma mensagem no console indicando que a função 'c' está sendo executada.
// Em seguida, chama as funções 'a' e 'b' em sequência.
function c() {
    console.log('Executando c()')
    a() // Chama a função 'a', que imprime sua própria mensagem.
    b() // Chama a função 'b', que imprime sua própria mensagem.
}

// Chama a função 'c', que por sua vez executa as funções 'a' e 'b'.
c()
