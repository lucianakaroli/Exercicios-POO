/* Escreva um programa de console que continuamente solicita um numero de CEP (0 para sair do programa) e 
consulta os dados atraves de um Web Service ViaCep cuja documentacao esta disponivel em https://viacep.com.br/ .
Utilize a API fetch() para realizar a consulta. Faca o tratamento correto de possiveis excecoes. */

import promptsync from "prompt-sync";


const prompt = promptsync({ sigint: true });
let sair = false;
while (!sair) {
    let cep = prompt("Entre com um CEP composto de 8 dígitos (0=sair):");
    if (cep === "0") {
        sair = true;
        continue;
    }
    try {
        const uriBase = 'https://viacep.com.br/ws';
        const resposta = await fetch(`${uriBase}/${cep}/json`);
        if (resposta.ok) {
            const dadosJson = await resposta.json();
            console.log("Dados:");
            console.log(dadosJson);
        } else {
            console.log(`Status: ${resposta.status}`);
            console.log(`StatusText: ${resposta.statusText}`);
        }
    } catch (error) {
        console.error("Falha de acesso ao web service:");
        console.error(error);
    }
}
