const ControllerProduto = require('../controllers/ControllerProduto')
const ControllerCliente = require('../controllers/ControllerCliente')
const ControllerVenda   = require('../controllers/ControllerVenda')

const express = require('express')

const routes = express.Router()

routes.get("/produtos", ControllerProduto.findAll)
routes.get("/produtos/:id", ControllerProduto.findById) 
routes.post("/produtos", ControllerProduto.add)
routes.put("/produtos/:id", ControllerProduto.update) 
routes.delete("/produtos/:id", ControllerProduto.delete)

routes.get("/clientes", ControllerCliente.findAll)
routes.get("/clientes/:id", ControllerCliente.findById) 
routes.post("/clientes", ControllerCliente.add)
routes.put("/clientes/:id", ControllerCliente.update) 
routes.delete("/clientes/:id", ControllerCliente.delete)

routes.get("/vendas", ControllerVenda.findAll)
routes.get("/vendas/:id", ControllerVenda.findById) 
routes.post("/vendas", ControllerVenda.add)
routes.put("/vendas/:id", ControllerVenda.update) 
routes.delete("/vendas/:id", ControllerVenda.delete)

module.exports = routes