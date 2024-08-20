/* Escreva um programa JavaScript que le um arquivo contendo um texto
e imprime a lista de todas as palavras diferentes que aparecem no texto
*/ 

import nReadlines from "n-readlines";

let arq = new nReadlines("umTexto.txt");
let buf;
let linha;
let dados;

let palavras = new Set();
while (buf = arq.next()){
    linha = buf.toString("utf8");
    dados = linha.split(" ");
    for(let pal of dados){
        palavras.add(pal);
    }
}

for(let p of palavras){
    console.log(p);
}