async function funcaoAssincrona() {
    console.log(1);
    return 3;
}
funcaoAssincrona().then(console.log);
console.log(2);
