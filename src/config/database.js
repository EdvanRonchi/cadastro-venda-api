const Sequelize = require('sequelize')
const Op = Sequelize.Op

require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})

sequelize.authenticate().then(() => {
    console.log("Conectado ao banco!")
}).catch(() => {
    console.log("Erro ao conectar ao banco!")
})

module.exports = {
    Sequelize,
    sequelize,
    Op
}
