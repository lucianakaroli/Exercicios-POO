/* Multiplicar por 10 todos os numeros pares entre 1 e 10 e depois somá-los.*/

let numeros = [1,2,3,4,5,6,7,8,9,10];
let somatorio = numeros.filter(n => n % 2 === 0 )
                        .map(a => a * 10 )
                        .reduce((a,b) => a + b);
console.log(somatorio);