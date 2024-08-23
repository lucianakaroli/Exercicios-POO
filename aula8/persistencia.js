import * as fs from "node:fs/promises";
import { Moeda, Cofrinho } from "./entidades.js";


async function salvarCofrinho(cofrinho, nomeArquivo) {
    const json = JSON.stringify(cofrinho);
    return fs.writeFile(nomeArquivo, json);
}


async function lerCofrinho(nomeArquivo) {
    const json = await fs.readFile(nomeArquivo, "utf8");
    const obj = JSON.parse(json);
    const cofrinho = new Cofrinho();
    obj.moedas.forEach(m => cofrinho.adicionar(new Moeda(m.valor, m.nome)));
    return cofrinho;
}


export { salvarCofrinho, lerCofrinho };
