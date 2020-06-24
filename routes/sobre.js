//Carregando os módulo
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("sobre/sobre")
})

router.get('/edit-sobre', (req, res) => {
    res.render("sobre/edit-sobre", {layout: 'adm.handlebars'})
})

module.exports = router