// Função sem retorno

// function imprimirSoma(a, b){
//     console.log(a + b

//     )
// }

// imprimirSoma(2, 5)
// imprimirSoma(7, 8, 9, 5)

// // Função com retorno

// function soma(a, b = 1){
//     return a + b
// }

// console.log(soma(2, 3))
// console.log(soma(2))

//Amarzenando uma função em uma variavel

const impSoma = function (a, b){
    console.log(a + b)
}
impSoma(2, 3)

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 8))