const { Sequelize, sequelize } = require('../config/database')

const Cliente = sequelize.define('Clientes', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Cliente.sync()

module.exports = Cliente