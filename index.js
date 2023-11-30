//importando um módulo do express:
const express = require('express');

const app = express();

app.use(express.json());

const connection = require("./database/database");
console.log(connection);

const CategoriaController = require("./Controller/CategoriaController");
app.use("/", CategoriaController);

app.listen(3000, ()=>{
    console.group('SERVIDOR RODANDO!')
});

