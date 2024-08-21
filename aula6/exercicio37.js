/* Escreva uma funcao max(array) que recebe um array de numeros e retorna o maior elemento encontrado no array.
Assuma que o array nao está vazio. Nao utilize funcoes auxiliares de outros objetos disponibilizados pelo
JavaScript. Depois, mostre um exemplo de execucao da funcao. */

function max(array) {
    let maior = array[0];
    for (let valor of array) {
        if (valor > maior) {
            maior = valor;
        }
    }
    return maior;
}

const numeros = [4,2,1,4,5,9,0];
console.log(max(numeros));