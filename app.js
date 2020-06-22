//Carregar os módulos

const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();


//Configuração

//BodyParser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Iniciando servidor

app.get('/', (req, res) => {

    res.send("Servidor iniciado...");

});

app.listen(3000);