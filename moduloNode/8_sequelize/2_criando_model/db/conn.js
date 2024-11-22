const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('db_user', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres'
})

// try{
//     sequelize.authenticate()
//     console.log('Conectamos com sucesso o Sequelize')
// } catch(err){
//     console.log('Não foi possível conectar: ', error)
// }

module.exports = sequelize