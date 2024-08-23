async function somar(a, b) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Argumentos devem ser valores numéricos");
    }
    return a + b;
}


try {
    let resultado = await somar(1, 2);
    console.log(resultado);
    resultado = await somar(1, "2");
    console.log(resultado);
} catch (erro) {
    console.error(erro.message);
}
