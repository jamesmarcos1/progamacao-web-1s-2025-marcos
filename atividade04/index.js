const express = require('express');
const app = express();
const estoque = require('./util/estoque');

const PORT = 3000;

// Rota para adicionar um produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;
  const resultado = estoque.adicionarProduto(id, nome, Number(qtd));
  res.send(resultado);
});

// Rota para listar todos os produtos
app.get('/listar', (req, res) => {
  res.json(estoque.listarProdutos());
});

// Rota para remover um produto do estoque
app.get('/remover/:id', (req, res) => {
  const { id } = req.params;
  const resultado = estoque.removerProduto(id);
  res.send(resultado);
});

// Rota para editar a quantidade de um produto
app.get('/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;
  const resultado = estoque.editarProduto(id, Number(qtd));
  res.send(resultado);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
