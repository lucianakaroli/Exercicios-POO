/* Escreva um programa JavaScript que le um arquivo contento uma lista
de produtos (codigo, descricao, preco unitario). A partir de entao 
cada vez que o usuário digita o codigo do produto, exibe na tela as
informacoes correspondentes. Implemente o programa e discuta 
alternativas de implementacao com e sem usar dicionario. */


import nReadlines from "n-readlines";
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});


let arq = new nReadlines('produtos.txt');
let buf;
let linha;
let dados;

arq.next();

let prods = new Map();
while (buf = arq.next()) {
   linha = buf.toString('utf8');
   dados = linha.split(',');
   prods.set(dados[0],
       {
           descricao:dados[1],
           preco:Number(dados[2])
       });
}

let fim = false;
while(!fim){
   let cod = prompt('Entre o código do produto (0=fim): ');
   if (cod === '0'){
       fim = true;
       continue;
   }
   if (prods.has(cod)){
       let prod = prods.get(cod);
       console.log(prod);
   }else{
       console.log('Produto inexistente!')
   }
}