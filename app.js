//Carregar os módulos

const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

const home = require('./routes/home');


//Configuração

//BodyParser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/home', home);


//Iniciando servidor

app.get('/', (req, res) => {

    res.send("Servidor iniciado...");

});

app.listen(3000);