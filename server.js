const express = require('express');
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()

require('dotenv').config()

app.use(cors());
app.use(express.json());
   
requireDir('./src/models');

app.use('/api', require('./src/routes/routes'))

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})