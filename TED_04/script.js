let nomes = ['lucas', 'joao', 'maria', 'theo', 'jose']

console.log(nomes[2]);


nomes.push('guilherme');

nomes.unshift('marcos');

console.log(nomes);

nomes.pop();

console.log(nomes);


let numeros = [2, 4, 6, 8];

let multi = numeros.map(function(num){
    return num * 2;

})

console.log(multi);

let numbers = [1, 3, 5, 7, 9];

let maiores = numbers.filter(function(big){
    return big > 5;

})

console.log(maiores)