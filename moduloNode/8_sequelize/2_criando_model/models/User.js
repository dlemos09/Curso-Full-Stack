// Importa o objeto 'DataTypes' do módulo 'sequelize'.
// 'DataTypes' é uma coleção de tipos de dados que o Sequelize oferece para definir os campos de um modelo (ex.: STRING, INTEGER, BOOLEAN).
// Ele é usado para especificar o tipo de cada coluna ao criar um modelo no Sequelize.
const { DataTypes } = require('sequelize');

const db = require('../db/conn')


// criando classe usuário
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    date_of_birth: {
        type: DataTypes.DATE,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports = User