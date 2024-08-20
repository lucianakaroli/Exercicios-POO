/* Escrever um programa JavaScript que solicita a quantidade de 
sucos e sanduiches consumidos pelos clientes de uma mesa de 
uma lanchonete e exibe o recibo com os valores parciais e o total
final a pagar conforme abaixo */
 
import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

let suco_valor = 5.2;
let quantidade_suco = Number(prompt("Qual a quantidade de suco? "))
let total_suco = suco_valor * quantidade_suco

let sanduiche_valor = 12;
let quantidade_sanduiche = Number(prompt("Qual a quantidade de sanduíche?"));
let total_sanduiche = sanduiche_valor * quantidade_sanduiche

console.log("Rebibo:")
console.log(`Suco R$: ${suco_valor}, quantidade : ${quantidade_suco}, Total R$: ${total_suco}`);
console.log(`Sanduiche R$: ${sanduiche_valor}, quantidade: ${quantidade_sanduiche}, Total R&: ${total_sanduiche}`);