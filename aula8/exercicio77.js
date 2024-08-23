async function funcaoAssincrona() {
    console.log(1);
    return 3;
}
let resultado = await funcaoAssincrona();
console.log(2);
console.log(resultado);
