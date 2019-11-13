const Venda = require('../models/Venda')
const { sequelize } = require('../config/database')

module.exports = {
    async findAll(req, res){
        const venda = await sequelize.query('SELECT * FROM "Vendas" "v"', { type: sequelize.QueryTypes.SELECT})

        return res.json(venda);
    },
    
    async findById(req, res){
        const venda = await Venda.findAll({
            where: {
                id: req.params.id
            }
        })

        return res.json(venda);
    },

    async add(req, res){
        try {
            const { quantidade, produtoId, clienteId } = req.body
        
            const produto = await Produto.findAll({
                attributes: ['quantidade_estoque', 'valor'],
                where: {
                    id: produtoId
                }
            })

            const { quantidade_estoque, valor } = produto[0].dataValues;
            
            if(quantidade_estoque == 0){
                return res.status(400).send({error: "Produto com estoque vazio!"})  
            }else if(quantidade_estoque < quantidade){
                return res.status(400).send({error: `Produto em estoque: ${quantidade_estoque}`})  
            }

            const quantidade_atual = quantidade_estoque - quantidade
            const valor_total = quantidade * valor

            await Produto.update({ quantidade_estoque: quantidade_atual }, {
                where: {
                    id: produtoId
                }
            }) 
            
            const venda = await Venda.create({
                clienteId,
                produtoId,
                quantidade,
                valor_unitario: valor,
                valor_total
            })
            
            if(!venda){
                return res.status(400).send({error: "Não foi possivel cadastrar o pedido!"})
            }

            return res.json(venda) 

        } catch (error) {
            return res.status(400).send({error: "Erro ao cadastrar o pedido!"})
        }
    },

    async update(req, res){
        const venda = await Venda.update(req.body, {
            where: {
                id: req.params.id
            }
        }) 
        
        return res.json(venda)  
    },

    async delete(req, res){
        const venda = await Venda.destroy({
            where: {
                id: req.params.id
            }
        })
         
        return res.send(`Pedido com id ${req.params.id} foi deletetado`)
    },
}