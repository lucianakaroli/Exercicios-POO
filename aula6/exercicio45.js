/* Escreva uma funcao que, utilizando objetos Map, calcule a frequencia de cada numero presente em um determinado
array contendo numeros inteiros. Faca uso das funcoes de alta-ordem exploradas nesta aula. */

function frequencia(array){
    return array.reduce(
        (tabela,numero) => tabela.set(numero, (tabela.get(numero) ||0) + 1),
        new Map()
    );
}

console.log(frequencia([1,2,3,1,2,0,2]));