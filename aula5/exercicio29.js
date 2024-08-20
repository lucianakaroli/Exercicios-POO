/* Escreva um programa JavaScript que lê um arquivo contendo uma
lista de palavras(uma por linha) e imprime a frequencia de
ocorrencia de cada uma delas. Use dicionarios para solucionar problema
*/

import nReadlines from "n-readlines";

let arq = new nReadlines("palavras.txt");
let buf;
let palavra;

let freq = new Map();
while (buf = arq.next()){
    palavra = buf.toString("utf8");
    if(freq.has(palavra)){
        let c = freq.get(palavra);
        freq.set(palavra,c+1);
    }
    else{
        freq.set(palavra,1);
    }
}
for (let k of freq.keys()){
    console.log(`${k}:${freq.get(k)}`);
}