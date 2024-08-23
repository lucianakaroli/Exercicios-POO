/* Escreva um codigo JavaScript que imprima no console o horario atual
do sistema em intervalos de 1 segundo. Ao final da passagem de tempo de 10
segundos, o programa deve encerrar. Voce deve fazer uso de metodos assincronos. */

console.log("iniciando...");
const intervalId = setInterval(() => {
    console.log(new Date().toTimeString());
}, 1000);
setTimeout(() => clearInterval(intervalId), 10000);
