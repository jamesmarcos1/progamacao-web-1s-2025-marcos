const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', { errors: [], data: {} });
});

app.post('/',
    // Validações
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('sobrenome').notEmpty().withMessage('Sobrenome é obrigatório'),
    body('cpf').notEmpty().withMessage('CPF é obrigatório'),
    body('nascimento').notEmpty().withMessage('Data de nascimento é obrigatória'),
    body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
    body('cep').notEmpty().withMessage('CEP é obrigatório'),
    body('endereco').notEmpty().withMessage('Endereço é obrigatório'),
    body('clinica').notEmpty().withMessage('Clínica é obrigatória'),
    body('especialidade').notEmpty().withMessage('Especialidade é obrigatória'),
    body('data').notEmpty().withMessage('Data é obrigatória')
        .bail()
        .custom(value => {
            const agendada = new Date(value);
            if (isNaN(agendada.getTime()) || agendada <= new Date()) {
                throw new Error('Data deve ser futura');
            }
            return true;
        }),
    body('hora').notEmpty().withMessage('Hora é obrigatória'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('index', { errors: errors.array(), data: req.body });
        }
        // Aqui você pode salvar os dados em um banco, enviar e-mail etc.
        res.send('Agendamento realizado com sucesso!');
    }
);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
