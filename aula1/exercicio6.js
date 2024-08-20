/* Considere os numeros de matricula trabalhados nas dinamicas D5 e 
D7. A diferenca é que agora os dois primeiros digitos indicam o nivel
de acesso do funcionario aos setores da empresa. Atualmente os niveis
de acesso possiveis sao 01, 21, 35,, 66, 67 e 88.
Escreva uma funcao que recebe por parametro um numero pertencente ao
intervalo [0;9999] e o nivel de acesso de um funcionario e retorna 
o numero de matricula do funcionario. Como normalmente o nivel de 
acesso dos funcionarios é "21", assuma este valor como default.
Escreva a funcao e um exemplo de uso */

import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

function nivelAcessoOk(nivelAcesso){
    switch(nivelAcesso) {
        case "01" :
        case "21" :
        case "35" :
        case "66" :
            return true;
        default:
            return false;
    }
}

function acrescentaVerificador(matricula, nivelAcesso=21){
    let digitos = matricula;
    let soma = 0;
    while (digitos.length != 1) {
        for(let i=0; i<digitos.length; i++) {
            soma = soma + Number(digitos.at(i));
        }
        digitos = String(soma);
        soma = 0;
    }
    return nivelAcesso + matricula + '-' + digitos 
}

let matricula = prompt("Entre seu numero de matricula: ");
let nivel = prompt("Entre seu nivel de acesso: ");
if (nivelAcessoOk(nivel) == true) {
    let matrCompleta = acrescentaVerificador(matricula);
    console.log(`Numero de matricula completo ${matrCompleta}`);
}
else{
    console.log("Nivel de acesso invalido")
}
