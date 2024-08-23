import { Moeda, Cofrinho } from "./entidades.js";
import * as persistencia from "./persistencia.js";

const cofre = new Cofrinho();
cofre.adicionar(new Moeda(1, "Um real"));
cofre.adicionar(new Moeda(0.5, "Cinquenta centavos"));
cofre.adicionar(new Moeda(0.25, "Vinte e cinco centavos"));
try {
    await persistencia.salvarCofrinho(cofre, "cofre.json");
    console.log("Cofre armazenado com sucesso");
    const cofre2 = await persistencia.lerCofrinho("cofre.json");
    cofre2.moedas.forEach(m => console.log(m.nome));
    console.log(cofre2.calcularTotal());
} catch (error) {
    console.error("Falha de processamento");
    console.error(error);
}