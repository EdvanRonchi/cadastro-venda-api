const Cliente = require('../models/Cliente')

module.exports = {
    async findAll(req, res){
        const cliente = await Cliente.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })

        return res.json(cliente);
    },
    
    async findById(req, res){
        const cliente = await Cliente.findAll({
            where: {
                id: req.params.id
            }
        })

        return res.json(cliente);
    },

    async add(req, res){
        try {
            const { cpf } = req.body
            
            const validar = await Cliente.findAll({ where: { cpf } })
            
            if(validar != ""){
                return res.status(401).send({error: "CPF/CNPJ já cadastrado"})
            }

            const cliente = await Cliente.create(req.body)
            
            return res.json(cliente)

        } catch (error) {
            return res.status(400).send({error: "Erro ao cadastrar o cliente!"}) 
        }    
    },

    async update(req, res){
        const cliente = await Cliente.update(req.body, {
            where: {
                id: req.params.id
            }
        }) 
        
        return res.json(cliente)  
    },

    async delete(req, res){
        const cliente = await Cliente.destroy({
            where: {
                id: req.params.id
            }
        })
         
        return res.send(`Cliente com id ${req.params.id} foi deletetado`)
    },
}