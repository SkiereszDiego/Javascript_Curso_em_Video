/*
Faça um algoritimo que receba dois parâmetros, um vetor de inteiros e 
um número inteiro, e retorne um vetor contendo somente os números 
ímpares menores que o número inteiro recebido.
*/

var numInt = [5, 17, 1, 8, 15, 11, 4]
var p = 12

function solucao(array, parametro){
    var retorno = []
    for (var i = 0; i < array.length; i++) {
        if ((array[i] % 2) !== 0 && (array[i] < parametro)) {
            retorno.push(array[i]);
        }
    }
    return retorno;
}



console.log(solucao(numInt, p))