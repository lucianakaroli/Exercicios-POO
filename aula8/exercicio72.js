/* Excecao em codigo assincrono */

const p = new Promise((resolve, reject) => {
    console.log("início execução asssíncrona");
    reject(new Error("Erro!"));
});
p.catch(e => console.error("erro capturado:", e.message))
 .then(() => console.log("continua execução assíncrona"));
