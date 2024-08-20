/* Crie uma arquivo texto com dados de vagoes ferroviarios de
carga (identificador numerico e capacidade de carga). Os vagoes
devem ter uma propriedade adicional capaz de indicar se estao em
uso ou nao. Em seguida escreva um programa capaz de ler este
arquivo e armazenar os vagoes em um arranjo. Por fim o programa
deve marcar como "em uso" 4 vagoes com capacidade para mais de 
5000 kg e imprimir a relacao completa dos vagoes. */

import { validate } from "bycontract";
import nReadlines from "n-readlines";

class Vagao{
    #id;
    #capCarga;
    #livre;
    
    constructor(id,capCarga){
        validate(arguments, ["number", "number"]);
        if(id <= 0 || capCarga <=0){
            throw new Error ("Dados invalidos");
        }
        this.#id = id;
        this.#capCarga = capCarga;
        this.#livre = true;
    }

    get id(){
        return this.#id;
    }

    get capCarga(){
        return this.#capCarga;
    }

    get livre(){
        return this.#livre;
    }

    ocupa(){
        this.#livre = false;
    }

    libera(){
        this.#livre = true;
    }

    toString(){
        let str = `[vagao: ${this.#id}, capCarga: ${this.#capCarga}, livre: ${this.#livre}]`;
        return str;
    }
}

class GaragemDeVagoes{
    #vagoes;

    constructor(narq){
        this.#vagoes = [];
        carregaDados(narq);
    }

    carregaDados(narq){
        let arq = new nReadlines(narq);
        let buf = "";
        let linha = "";
        let dados = "";

        arq.next();
        while(bur = arq.next()){
            linha = buf.toString("utf8");
            dados = linha.split(",");
            let id = Number(dados[0]);
            let capCarga = Number(dados[1]);
            let vagao = new Vagao(id,capCarga);
            this.#vagoes.push(vagao);
        }
    }

    get vagoes(){
        return this.#vagoes.values();
    }
}

