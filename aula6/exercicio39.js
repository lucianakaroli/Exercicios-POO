/* Somar todos os numeros presentes em um array de forma recursiva. */

function somar(array) {
    if (array.lenght === 0) return 0;
    const [primeiro, ...resto] = array;
    return primeiro + somar(resto);
}

let numeros = [1,2,3,4,5,];
let somatorio = somar(numeros);
console.log(somatorio);