//Marcos André Barros Meneses

function transporMatriz(A) {
    console.log("Matriz original:");
    A.forEach(linha => console.log(linha));

    // Gera a matriz transposta
    // O método A[0].map((_, colIndex) => ...) percorre as colunas da matriz original
    // e retorna um array com os elementos de cada linha correspondentes àquela coluna.
    const T = A[0].map((_, colIndex) => A.map(linha => linha[colIndex]));

    console.log("Matriz transposta:");
    T.forEach(linha => console.log(linha));
}

// Ex:
const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizExemplo);
