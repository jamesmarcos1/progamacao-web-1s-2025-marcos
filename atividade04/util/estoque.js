let estoque = [];

function adicionarProduto(id, nome, qtd) {
  if (estoque.some(produto => produto.id === id)) {
    return 'Erro: Produto com este ID já existe!';
  }
  estoque.push({ id, nome, qtd });
  return `Produto ${nome} adicionado com sucesso!`;
}

function listarProdutos() {
  return estoque.length > 0 ? estoque : 'Estoque vazio!';
}

function removerProduto(id) {
  const index = estoque.findIndex(produto => produto.id === id);
  if (index === -1) {
    return 'Erro: Produto não encontrado!';
  }
  estoque.splice(index, 1);
  return `Produto removido com sucesso!`;
}

function editarProduto(id, qtd) {
  const produto = estoque.find(produto => produto.id === id);
  if (!produto) {
    return 'Erro: Produto não encontrado!';
  }
  produto.qtd = qtd;
  return `Quantidade do produto ${produto.nome} atualizada para ${qtd}!`;
}

module.exports = {
  adicionarProduto,
  listarProdutos,
  removerProduto,
  editarProduto
};
