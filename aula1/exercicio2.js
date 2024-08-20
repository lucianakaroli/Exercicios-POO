/* Altere o programa desenvolvido nas dinâmicas D1 e D2 de maneira
que, caso algum dos produtos consumidos excedam 10 unidades, seja
oferecido um desconto de 20% no custo daquele produto. */

import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

let suco_valor = 5.2;
let quantidade_suco = Number(prompt("Qual a quantidade de suco? "))
let valor_suco_sem_desconto = suco_valor * quantidade_suco;
let valor_suco_desconto = 0;
let total_suco = valor_suco_sem_desconto;
if (quantidade_suco > 10){
   valor_suco_desconto = 20/100 * valor_suco_sem_desconto ;
   total_suco = (valor_suco_sem_desconto - valor_suco_desconto);
};

let sanduiche_valor = 12;
let quantidade_sanduiche = Number(prompt("Qual a quantidade de sanduíche?"));
let valor_sanduiche_sem_desconto = sanduiche_valor * quantidade_sanduiche
let valor_sanduiche_desconto = 0;
let total_sanduiche =  valor_sanduiche_sem_desconto;
if (quantidade_sanduiche > 10){
    valor_sanduiche_desconto = 20/100 * valor_sanduiche_sem_desconto ;
    total_sanduiche = (valor_sanduiche_sem_desconto - valor_sanduiche_desconto);
};


console.log("Rebibo:")
console.log(`Suco R$: ${suco_valor}, quantidade : ${quantidade_suco}, valor sem desconto: ${valor_suco_sem_desconto}, valor do desconto: ${valor_suco_desconto}, total: ${total_suco}`);
console.log(`Sanduiche R$: ${sanduiche_valor}, quantidade: ${quantidade_sanduiche}, valor sem desconto: ${valor_sanduiche_sem_desconto}, valor do desconto: ${valor_sanduiche_desconto}, total: ${total_sanduiche}`);
console.log(`Total a pagar: ${total_suco + total_sanduiche}`)