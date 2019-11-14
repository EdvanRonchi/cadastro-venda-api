const Produto = require('../models/Produto')

module.exports = {
    async findAll(req, res){
        const produto = await Produto.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })

        return res.json(produto);
    },
    
    async findById(req, res){
        const produto = await Produto.findAll({
            where: {
                id: req.params.id
            }
        })

        return res.json(produto);
    },

    async add(req, res){
        try {
            const produto = await Produto.create(req.body)
            
            return res.json(produto) 

        } catch (error) {
            return res.status(400).send({error: "Erro ao cadastrar o produto!"}) 
        }   
    },

    async update(req, res){
        const produto = await Produto.update(req.body, {
            where: {
                id: req.params.id
            }
        }) 
        
        return res.json(`Produto com id ${req.params.id} foi atualizado`)  
    },

    async delete(req, res){
        const produto = await Produto.destroy({
            where: {
                id: req.params.id
            }
        })
         
        return res.send(`Produto com id ${req.params.id} foi deletetado`)
    },
}