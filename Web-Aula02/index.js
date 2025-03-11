// Marcos

// Um array que contém uma matriz e um objeto
let dados = [
    // Matriz
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    // Objeto
    {
        nome: "João",
        idade: 25,
        saudar: function() {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        }
    }
];

console.log(dados[0][1][2]); // Saída: 6 (linha 1, coluna 2 da matriz)

// Chamando a função do objeto dentro do array
console.log(dados[1].saudar());
