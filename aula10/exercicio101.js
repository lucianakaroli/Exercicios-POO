 /* Escreva uma funcao para converter um objeto interavel assincrono em um array de valores. Depois, escreva um exemplo
 de codigo que demonstre o funcionamento da nova funcao. */
 
 async function asyncIterableParaArray(asyncIterable) {
    const resultado = [];
    for await (const valor of asyncIterable) {
        resultado.push(valor);
    }
    return resultado;
}


async function* geradorAssincrono() {
    yield 1;
    yield 2;
    yield 3;
}
const asyncIterable = geradorAssincrono();
const array = await asyncIterableParaArray(asyncIterable);
console.log(array);
