console.log("início execução síncrona");
try {
    throw new Error("Erro!");
} catch (e) {
    console.error("erro capturado", e.message);
}
console.log("continua execução síncrona");
