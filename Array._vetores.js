let num = [4, 5, 6, 7, 8]
/*
num[3] = 6 //cria uma vaga/elemento pro 6
num.push(7) // cria um elemento no ultimo lugar
num.length // atributo que mostra quantos elementos o vetor tem
num.sort() // Coloca os elementos em ordem crescente
*/

/*
num[3] = 9
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
*/

for(let pos=0; pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${ num[pos]}`)
}

//Simplificando

for(let pos in num){ //para cada posicao em num eu vou mostar o numpos
    console.log(`A posição ${pos} tem o valor ${ num[pos]}`)
}

//buscar valores dentro de vetores
let pos = num.indexOf(9)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}

