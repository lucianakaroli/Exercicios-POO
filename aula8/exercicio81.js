/* Suponha que voce possua as seguintes funcoes assincronas: */

async function somarUm(x) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (typeof x !== "number") {
        throw new Error("Argumento deve ser valor numérico");
    }
    return x + 1;
}

async function somarDois(x) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (typeof x !== "number") {
        throw new Error("Argumento deve ser valor numérico");
    }
    return x + 2;
}



function composicaoSeq(...funcoes) {
    return async (x) => {
        for (const funcao of funcoes) {
            x = await funcao(x);
        }
        return x;
    };
}

try {
    let resultado = await somarUm(5);
    resultado = await somarDois(resultado);
    console.log(resultado);        
} catch (e) {
    console.error(e.message);
}

try {
    const somaSeq = composicaoSeq(somarUm, somarDois);
    let resultado = await somaSeq(5);
    console.log(resultado);        
} catch (e) {
    console.error(e.message);
}