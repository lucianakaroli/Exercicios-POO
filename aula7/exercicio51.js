/* Uma implementacao simples de memoizacao faz uso de uma funcao de alta ordem e um dicionario para
armazenamento de resultados de computacoes. */

const memoize = (f) => {
    const cache = new Map();
    return(arg) => {
        if (cache.get(arg)){
            return cache.get(arg);
        }
        else{
            const resultado = f(arg);
            cache.set(arg, resultado);
            return resultado;
        }
    };
};

const dobro = x => x + x;
const dobroMem = memoize(dobro);
console.log(dobro(5));
console.log(dobroMem(5));