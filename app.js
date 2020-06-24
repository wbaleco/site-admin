//Carregando os módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const home = require("./routes/home")
const sobre = require("./routes/sobre")
const contato = require("./routes/contato")
const usuario = require('./routes/usuario')

const path = require('path')

//Configuração
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Handlebars
app.engine('handlebars', handlebars({ defaultLayout: "main" }))
app.set('view engine', 'handlebars');

//Rotas
app.use('/home', home)
app.use('/sobre', sobre)
app.use('/contato', contato)
app.use('/usuario', usuario)


//Iniciando servidor

app.get('/', (req, res) => {

    res.send("Servidor iniciado...");

});

app.listen(3000);