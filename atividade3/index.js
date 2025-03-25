const express = require('express');
const app = express();
const calculadora = require('./util/calculadora');

// Rota para somar
app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.somar(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

// Rota para subtrair
app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.subtrair(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

// Rota para multiplicar
app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.multiplicar(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

// Rota para dividir
app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const divisor = Number(b);
    if (divisor === 0) {
        return res.status(400).send('Divisão por zero não é permitida.');
    }
    const resultado = calculadora.dividir(Number(a), divisor);
    res.send(`Resultado: ${resultado}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
