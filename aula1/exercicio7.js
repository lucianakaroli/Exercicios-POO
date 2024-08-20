/* Escreva um programa que solicita para o usuário que informe as
idades de seus colegas da turma. Uma idade negativa sinaliza para o
sistema que todas as idades já foram informadas. Em seguida o 
programa deve solicitar que o usuário informe uma idade qualquer e 
então exibe na tela as seguintes informações:
a) Quantas pessoas tem na turma
b) Quantas pessoas da turma tem a idade informada
c) Quantas pessoas da turma tem mais que a idade informada */

import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

let idades = [];
let terminou = false;
let cont = 0;
while(!terminou){
    let idade = Number(prompt(`Entre a idade do ${cont+1}o colega: `));
    if(Number(idade)== -1){
        break;
    }
    idades[cont] = idade;
    cont++;
}
let resp = prompt("De qual idade deseja verificar a frequencia?")
let idadeFreq = Number(resp);
let freq = 0;
let maiores = 0;
for(let i=0; i<idades.length; i++){
    if (idades[i] == idadeFreq){
        freq++;
    }
    if (idades[i] > idadeFreq){
        maiores++;
    }
}
console.log(`Quantidade colegas com ${idadeFreq} anos: ${freq}`);
console.log(`Quantidade colegas com mais de ${idadeFreq}: ${maiores}`);