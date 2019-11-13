const { Sequelize, sequelize } = require('../config/database')

const Produto = sequelize.define('Produtos', {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'valor'
    },
    quantidade_estoque: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
    
})

Produto.sync()

module.exports = Produto