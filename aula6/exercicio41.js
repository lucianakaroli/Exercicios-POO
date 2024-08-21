/* Somar todos os numeros presentes em um array (estilo funcional). */

let numeros = [1,2,3,4,5];
let somatorio = numeros.reduce((a,b) => a+b, 0);
console.log(somatorio);