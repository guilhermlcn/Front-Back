let totalaulas = parseInt(prompt("Informe a quantidade de aulas: "));
let totalfalta = parseInt(prompt("Informe o total de faltas: "));
let nota1 = parseFloat(prompt("Informe a primeira nota: "));
let nota2 = parseFloat(prompt("Informe a segunda nota"));


let falta = ((totalfalta/totalaulas)*100);

if(falta < 25){
    console.log("O aluno esta reprovado por falta");

}else{  
    console.log("Aprovado por falta");
}

let media = ((nota1+nota2)/2)

if(media >= 7){
    console.log("Aprovado por nota")
}else if(media > 5 && media < 7) {
    console.log("RECUPERAÇÃO")
    let recuper = parseFloat(prompt("Informe a nota da recuperação: "))

    let novamedia = ((media + recuper)/2)

    console.log(novamedia)
    if(novamedia >= 7 && media != 0) {
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }

}else{
    console.log("Reprovado por nota")
}

console.log(totalaulas);
console.log(totalfalta);
console.log(falta+" %");
console.log(nota1);
console.log(nota2);