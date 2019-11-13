const { Sequelize, sequelize } = require('../config/database')

const Venda = sequelize.define('Vendas', {
    clienteId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Clientes',
            key: 'id'
        }
    },
    produtoId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Produtos',
            key: 'id'
        }
    },
    quantidade: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    valor_unitario: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    valor_total: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports = Venda
