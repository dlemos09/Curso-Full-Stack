// Importa a classe 'EventEmitter' do módulo 'events', que permite criar e manipular eventos.
const EventEmitter = require('events')

// Cria uma nova instância de 'EventEmitter' para definir e emitir eventos.
const eventEmitter = new EventEmitter()

// Define um manipulador (callback) para o evento 'start'.
// Quando o evento 'start' for emitido, este callback será executado, exibindo "Durante" no console.
eventEmitter.on('start', () => {
    console.log("Durante")
})

// Exibe "Antes" no console antes de emitir o evento.
console.log('Antes')

// Emite o evento 'start', o que aciona o callback associado ao evento e exibe "Durante".
eventEmitter.emit('start')

// Exibe "Depois" no console após a emissão do evento.
console.log('Depois')
