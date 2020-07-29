/*
Dado uma matriz de numeros inteiros (int[][]), faça um algoritimo que realize a soma
 dos itens da diagonal da principal
*/

const matriz =[
     [2, 2, 3],
     [4, -5, 6],
     [7, 8, 9]
]

//##########SOLUÇAO 01############

function calculo(matriz) {
    const count = matriz.length;
    let resultado = 0;
    for(let i = 0; i < count; i++) {
      resultado += matriz[i][i];
    }
    return resultado;
  }
  
console.log(calculo(matriz));

/*
A sua diagonal principal são os números 2, -5, 9 
respectivamente as posições 1,1 - 2,2 - 3,3 e 4,4 é soma é 6
*/

//##########SOLUÇAO 02############
 function calculoDiagonais(matrix) {
   var somaDiagonais = {main: 0, second: 0},
     matrixLength = matrix.length;
 
   for (var i = 0; i < matrixLength; i++) {
     somaDiagonais.main += matrix[i][i];
     somaDiagonais.second += matrix[i][matrixLength-i-1];
   }
   return somaDiagonais
 }
 
 console.log(calculoDiagonais(matriz))
