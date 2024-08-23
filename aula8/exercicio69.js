function somar(a,b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (typeof a !== "number" || typeof b !== "number") {
                    reject(new Error("Argumentos devem ser valores numéricos"));
                }
                resolve(a + b);
        }, 2000);
    });
}


somar(1,2)
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro.message));
somar(1,"2")
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro.message));
