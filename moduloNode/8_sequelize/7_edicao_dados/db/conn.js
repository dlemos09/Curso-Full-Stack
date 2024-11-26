const { Sequelize } = require('sequelize');
const moment = require('moment-timezone');  // Importando o moment-timezone para manipular fuso horário

// Criando a instância do Sequelize
const sequelize = new Sequelize('db_user', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    timezone: '-03:00', // Define o fuso horário local (UTC-3)
    dialectOptions: {
        useUTC: false, // Garante que o Sequelize não converta automaticamente para UTC
    }
});

// Testando a conexão com o banco de dados
try {
    sequelize.authenticate();
    console.log('Conectamos com sucesso ao Sequelize');
} catch (err) {
    console.log('Não foi possível conectar: ', err);
}

module.exports = sequelize;
