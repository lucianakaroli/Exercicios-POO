/* Escreva uma funcao curry(f) capaz de realizar a currificacao de uma funcao f(a,b) com dois
parametros de entrada. */

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a,b);
        }
    }
}

function somar(a,b) {
    return a + b;
}

const somarCurried = curry(somar);
console.log(somarCurried(1)(2));
