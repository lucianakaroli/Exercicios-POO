/* Uma grande empresa está patrocinando o show de um cantor famoso.
Os ingressos custam R$ 500,00 mas existem diversas categorias de 
desconto conforme a tabela ao lado. Escreva um programa JavaScript
que solicita a categoria do comprador e exibe na tela o valor a ser
pago  pelo ingresso. */

import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});



console.log("1: Geral")
console.log("2: Convidado")
console.log("3. Idoso")
console.log("4. Funcionario")
console.log("5. Funcionario idoso")
console.log("6. Criança")
let categoria = prompt("Digite o numero da sua categoria: ")

let valor_ingresso = 500;
switch(categoria){
    case "1":
        valor_ingresso = valor_ingresso;
        console.log(`valor ingresso: ${valor_ingresso}`);
        break;
    case "2":
        valor_ingresso = 75/100 * valor_ingresso;
        console.log(`valor ingresso: ${valor_ingresso}`);
        break;
    case "3":
        valor_ingresso = 50/100 * valor_ingresso;
        console.log(`valor ingresso: ${valor_ingresso}`);
        break;
    case "4":
        valor_ingresso = 50/100 * valor_ingresso;
        console.log(`valor ingresso: ${valor_ingresso}`);
        break;
    case "5":
        valor_ingresso = 25/100  * valor_ingresso;
        console.log(`valor ingresso: ${valor_ingresso}`);
        break;
    case "6":
        valor_ingresso = 0 * 500;
        console.log(`valor ingresso: ${valor_ingresso}`);
        break;
    default:
        valor_ingresso = NaN;
}