/* Dada uma funcao mais geral,mais currificada, atraves da aplicacao parcial criar funcoes mais 
especificas que podem ser reutilizadas */ 

const somar = x => (y => x + y);
const incrementar = somar(1);
console.log(incrementar(5));