/* Na dinamica D5, escrevemos um programa que calcula o dígito 
verificador para um numero de matricula. Tendo por base o código
já elborado, escreva um subprograma chamado acrescentaVerificador
que recebe um numero de matricula por parametro e retorna o numero
de matricula com o codigo verificador acrescentado. Lembre que o 
numero da matricula é composto por 6 dígitos de '0' a '9'.
Veja o exemplo de uso:
let matricula '2100453';
let matriculaCompleta = acrescentaVerificador(matricula);
console.log(matriculaCompleta); imprime 21004537-6 */

import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

function acrescentaVerificador(matricula){
    let digitos = matricula;
    let soma = 0;
    while (digitos.length != 1) {
        for(let i=0; i<digitos.length; i++) {
            soma = soma + Number(digitos.at(i));
        }
        digitos = String(soma);
        soma = 0;
    }
    return matricula + '-' + digitos 
}

let matricula = '111116'; //prompt("Entre seu numero de matricula: ");
let matrCompleta = acrescentaVerificador(matricula);
console.log(`Numero de matricula completo ${matrCompleta}`);
