/* Muitas funcoes de programacao possuem uma funcao, usualmente chamada de 
sleep(delay), que introduz um delay nao bloqueante em um programa por um certo
tempo. Escreva sua propria versao de uma funcao sleep fazendo uso das contrucoes
assincronas trabalhadas até o momento. Depois, mostre um exemplo simples de uso
da funcao construida. */

async function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

const antes = Date.now();
await sleep(1500);
const depois = Date.now();
console.log(depois - antes);