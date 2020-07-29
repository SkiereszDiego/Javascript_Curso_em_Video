/*
Escreva um algoritimo q receba dois arrays e retorne um terceiro com os elementos em comum.
Elementos com mais d uma ocorencia não devem se repetir no array de saida.

O filter() retorna um array com os elementos que se aplicam a uma condição que você fornece 
através de uma função.

O indexOf() retorna o índice de um elemento no arranjo. Se ele não for encontrado, é retornado -1.

*/


//#################  solucao01 ##############


var r1 = ['12', '32', '5','10']; 
var r2 = ['12', '456', '10','150'];

function solucao (array1, array2){
    return [...new Set(array1.filter(i => array2.indexOf(i) !==-1))]
}

console.log(solucao(r1, r2))


//#################  solucao02 ##############
/*
const a = [2, 3, 1, 0, 5];
const b = [1, 2, 3, 4, 5];

const tem = [];
const all = b;
a.forEach(function(item) {
    if(b.indexOf(item) != -1){
        tem.push(item);
    } else {
        all.push(item);
    }
});

console.log(tem);
console.log(all);
*/

const a = [2, 3, 1, 0, 5];
const b = [1, 2, 3, 4, 5];
const tem = [];

a.forEach(function(item) {
    if(b.indexOf(item) != -1){
        tem.push(item);
    }
});

console.log(tem);
/*
Sabendo o que é o que fica fácil então para resolver o problema, como já tinha as duas arrays com os valores,
a e b, criei mais duas variáveis uma que receberia a intersecção e a outra que receberia todos os valores de 
uma array, no meu caso escolhi a array b.

Percorri a array a com o método forEach() que chama uma função fornecida uma vez para cada elemento em uma matriz,
na ordem.

Fiz o teste com o método indexOf() que retorna a posição da primeira ocorrência de um valor especificado em uma 
string, se não achar o valor que está procurando ele retorna -1.

O teste é:

Se o valor de a naquela posição for diferente de -1, significa que o valor de a existe no b, então é uma intersecção
tem que ser adicionado na variável tem.
Se for igual a -1, então não existe no b, sendo assim deve ser adicionado na variável all, que contêm todos os valores 
de b.

*/