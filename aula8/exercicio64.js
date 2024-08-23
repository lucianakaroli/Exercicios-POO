function somar(a, b, callback) {
    setTimeout(() => {
        try {
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error("Argumentos devem ser valores numéricos");
            }
            callback(null, a + b);
        } catch (e) {
            callback(e, undefined);
        }
    }, 2000);
}


const callback = (erro, resultado) => {
    if (erro) {
        console.log(`Falha: ${erro}`);
    } else {
        console.log(`Sucesso: ${resultado}`);
    }
};


somar(1, 2, callback);
somar(1, "2", callback);
