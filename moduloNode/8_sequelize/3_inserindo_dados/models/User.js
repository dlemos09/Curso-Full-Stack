const {DataTypes} = require('sequelize')

const db = require('../db/conn')


// criando classe usuário
const User = db.define('User', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
        required: true
    },
})

module.exports = User