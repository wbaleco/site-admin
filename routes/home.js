//Carregando os módulo
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //res.send("Página inicial site")
    res.render("home/home")
})

module.exports = router