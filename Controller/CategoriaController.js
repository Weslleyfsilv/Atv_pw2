
const express = require('express');

const app = express();

const categoriaModel = require("../del/Categoria");

const router = express.Router();

app.post('/cadastrar', (req, res)=>{
    res.send('PRODUTO CADASTRADO COM SUCESSO!');
});

app.get('/listar',(req, res)=>{
    res.send('PRODUTO LISTADO COM SUCESSO!');
});

app.put('/alterar', (req, res)=>{
    res.send('PRODUTO ALTERADO COM SUCESSO!');
});

app.delete('/excluir', (req, res)=>{
    res.send('PRODUTO EXCLUIDO COM SUCESSO!');
});


router.post("/Categoria/cadastrar", (req, res) =>{

});

const router1 = express.Router();

router.get("/Categoria/listar", (req, res) =>{

});

const router2 = express.Router();

router.put("/Categoria/alterar", (req, res) =>{

});

const router3 = express.Router();

router.delete("/Categoria/excluir", (req, res) =>{

});


module.exports = router;
