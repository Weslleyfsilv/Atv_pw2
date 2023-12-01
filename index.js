const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const categoriaModel = require('./Model/Categoria');
const produtoModel = require('./Model/Produto')

const categoriaController = require("./Controller/Categoria");
app.use("/", categoriaController);

const produtoController = require("./Controller/Produto");
app.use("/", produtoController);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO!')
});