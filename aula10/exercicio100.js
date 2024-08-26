/* Estamos interessados na implementacao de um gerador range capaz de produzir uma sequencia de numeros inteiros. O gerador
deve ser parametrizado por um valor de inicio (padrao 0), um passo de incremento (padrao 1) e um valor de fim (padrao 0). 
Observe que passos negativos sao permitidos para que se possa criar sequencias decrescentes de valores. */


function* range(to = 0, step = 1, from = 0) {
    let i = 0;
    let length = Math.floor((to - from) / step) + 1;
    while (i < length) yield from + i++ * step;
};

console.log([...range(5)]);
console.log([...range(5,2)]);
console.log([...range(5,-2,10)]);