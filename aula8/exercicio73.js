/* Suponha que voce possua as seguintes funcoes assincronas: */

function somarUm(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof x !== "number") {
                reject(new Error("Argumento deve ser valor numérico"));
            }
            resolve(x + 1);
        }, 1000);
    });
}


function somarDois(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof x !== "number") {
                reject(new Error("Argumento deve ser valor numérico"));
            }
            resolve(x + 2);
        }, 2000);
    });
}


function composicaoSeq(...funcoes) {
    return (x) => funcoes.reduce(
        (promise, funcao) => promise.then(funcao),
        Promise.resolve(x)
    );
}


Promise.resolve(5)
.then(somarUm)
.then(somarDois)
.then(console.log)
.catch(console.error);

const somaSeq = composicaoSeq(somarUm, somarDois);
somaSeq(5)
.then(console.log)
.catch(console.error);