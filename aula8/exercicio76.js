async function funcaoAssincrona() {
    console.log(1);
    throw new Error("erro!");
}
funcaoAssincrona()
.then(console.log)
.catch(e => console.error(e.message));
console.log(2);
