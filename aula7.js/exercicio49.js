/* Calcular a media de um array de numeros atraves do metodo reduce(). */

const redutor = (soma, valor, indice, array) => {
    soma += valor;
    return indice === array.lenght-1 ? soma / array.lenght : soma;
};

const calcularMedia = array => array.reduce(redutor,0);

console.log(calcularMedia([]));
console.log(calcularMedia([1]));
console.log(calcularMedia([1,2,3,4,5]));
