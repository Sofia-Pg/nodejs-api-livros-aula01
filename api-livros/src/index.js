const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

const livros = require("./livros.json");

app.get('/', (request, response) => {
    return response.json( livros )
});

app.post('/livros', (request, response) => {
    const {titulo, autor, anoPublicacao } = request.body;
    return response.json( { titulo: titulo, autor: autor, ano: anoPublicacao } )
});

app.put('/livros/:id', (request, response) => {
    const parametro = request.params;
    return response.json( parametro )
});

app.delete('/livros/:id', (request, response) => {
    const { id } = request.params;
    return response.json( id )
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))