function somar(a, b, falha, sucesso) {
    setTimeout(() => {
        try {
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error("Argumentos devem ser valores numéricos");
            }
            sucesso(a + b);
        } catch (e) {
            falha(e);
        }
    }, 2000);
}


const sucessoCallback = resultado => console.log(`Sucesso: ${resultado}`);
const falhaCallback = erro => console.log(`Falha: ${erro}`);


somar(1, 2, falhaCallback, sucessoCallback);
somar(1, "2", falhaCallback, sucessoCallback);
