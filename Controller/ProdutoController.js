
const express = require('express');

const app = express();

app.post('/cadastrar', (req, res)=>{
    res.send('CATEGORIA CADASTRADA COM SUCESSO!');
});

app.get('/clientes',(req, res)=>{
    res.send('CATEGORIA LISTADA COM SUCESSO!');
});

app.put('/alterar', (req, res)=>{
    res.send('CATEGORIA ALTERADA COM SUCESSO!');
});

app.delete('/excluir', (req, res)=>{
    res.send('CATEGORIA EXCLUIDA COM SUCESSO!');
});

