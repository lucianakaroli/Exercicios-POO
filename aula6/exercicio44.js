/* Voce acabou de trabalhar com os metodos map(), filter() e reduce() sobre arrays . Seu desafio será implementar
as suas proprias versoes de novas funcoes que replicam o funcionamento dos metodos originalmente presentes na
linguagem JavaScript. Desenvolva código para as seguintes funcoes sem usar os metodos originais:
function map(funcao,array) 
function filter(funcao,array) 
function reduce(funcao,array,valorInicial) */

function map(f,a) {
    const resultado = [];
    for(let elemento of a){
        resultado.push(f(elemento));
    }
    return resultado;
}

const numeros = [1,2,3];
const resultado = map(n => n+1, numeros);
console.log(resultado);


function filter(f,a){
    const resultados = [];
    for(let elemento of a){
        if(f(elemento)){
            resultado.push(elemento);
        }
    }
    return resultado;
}

const numeros2 = [1,2,3];
const resultado2 = filter(n => n>=2, numeros);
console.log(resultado2); 


function reduce(f,a,i){
    let acumulador = i;
    for(let elemento of a){
        acumulador = f(acumulador,elemento);
    }
    return acumulador;
}

const numeros3 = [1,2,3,4];
const resultado3 = reduce((a,b) => a*b, numeros3, 1);
console.log(resultado3); 