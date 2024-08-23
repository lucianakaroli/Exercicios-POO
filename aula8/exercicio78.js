async function funcaoAssincrona() {
    console.log(1);
    throw new Error("erro!");
}
try {
    let resultado = await funcaoAssincrona();
    console.log(2);
    console.log(resultado);
} catch (e) {
    console.error(e.message);
}
