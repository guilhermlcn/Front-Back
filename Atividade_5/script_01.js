//Questao 1

let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 0.03; 
let taxaB = 0.015; 
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    anos++;
}

console.log(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);
console.log(`População final de A: ${Math.round(populacaoA)}`);
console.log(`População final de B: ${Math.round(populacaoB)}`);

//Questao 2

let impares = 0;
let pares = 0;
for (let i = 0; i < 10; i++) {

    let idade = parseInt(prompt ("Digite um número: "));
    if (idade % 2 != 0){
        impares ++;
    } else {
        pares++;
    }

}     

console.log ("Números impares " +impares.toFixed(2));
console.log ("Numeros pares " +pares.toFixed(2));

//Questao 3

let N = parseInt(prompt("Quantos números você quer informar?"));   

let soma = 0;
let menor;
let maior;

for (let i = 0; i < N; i++){
    
    let numero = (prompt("Digite um número "+(i + 1)));
    soma += numero
    if (i === 0) {
        menor = numero;
        maior = numero;
    } else {
        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
    }       

}

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);


//Questao 4

let salario = 1000;
let aumento = 1.15;
let ano = 1995

for (let i = 0; i < 30; i++){

    salario *= aumento
    ano ++

    console.log("Salário do ano "+ano+"= " + salario.toFixed(2))

}    

//Questao 4.5

let salario_ = parseFloat(prompt("Digite o salário incial "))
let aumento_ = 1.15;
let ano_ = 1995

for (let i = 0; i < 30; i++){

    salario_ *= aumento_
    ano_ ++

    console.log("Salário do ano "+ano+"= " + salario_)

}    

//Questao 5

function calculo(){
    
    let raio = parseFloat(prompt("Digite a área do círculo "))

    let area = 3.14 * raio * raio;
    let perimetro = 2 * 3.14 * raio;

    console.log ("Raio "+raio);
    console.log ("Área do círculo "+area)
    console.log ("Perímetro "+perimetro)
}

calculo();

//Questao 6

function calculoMontante(){

    let capital = parseInt(prompt("Capital Inicial: "))
    let taxa = parseInt(prompt("Taxa de Juros: "))
    let tempo = parseInt(prompt("Tempo de investimento: "))

    let montante;

    montate = capital * (1 + taxa) * tempo;

    console.log(montante.toFixed(2))

}
