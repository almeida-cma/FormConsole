// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/processar', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const idade = req.body.idade;
    const genero = req.body.genero;
    const comentario = req.body.comentario;

    console.log('Dados do formulário recebidos:');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Idade:', idade);
    console.log('Gênero:', genero);
    console.log('Comentário:', comentario);

    res.send('Formulário enviado com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});