/* Considerando as funcoes desenvolvidas no exercicio 17.
Explorando classes literais, escreva uma unica funcao que recebe
um arranjo de passagens por parametro e retorna os dois resultados:
a) quantidade de malas que serao despachadas.
b) quantidade de passageiros que tem acesso VIP. */

import { validate } from "bycontract";

class Passagem{
    #data;
    #nroVoo;
    #custoBase;

    constructor(data,nroVoo,custoBase){
        validate(arguments, ["String", "Number", "Number"]);
        this.#data = data;
        this.#nroVoo = nroVoo;
        this.#custoBase = custoBase;
    }

    get data(){
        return this.#data;
    }

    get nroVoo(){
        return this.#nroVoo;
    }

    get custoBase(){
        return this.#custoBase;
    }

    totalPagar(){
        return undefined;
    }

    qtdadeMalas(){
        return 0;
    }

    acessoPrioritario(){
        return false;
    }

    toString(){
        let str = `Data: ${this.data}, Voo: ${this.#nroVoo}, valor: ${this.totalPagar}`;
        str += `malas: ${this.qtdadeMalas}, acesso prioritario: ${this.acessoPrioritario}`;        
        return str;
    }
}

class Economica extends Passagem{
    constructor(data,nroVoo,custoBase) {
        super(data,nroVoo,custoBase);
    }

    totalPagar(){
        let operacional = this.custoBase * 0.1;
        return this.custoBase + operacional;
    }

    toString(){
        return "Economica: " + super.toString
    }
}

class Executiva extends Passagem{
    constructor(data,nroVoo,custoBase){
        super(data, nroVoo, custoBase);
    }

    totalPagar(){
        let operacional = this.custoBase * 0.3;
        return this.custoBase + operacional;
    }

    qtdadeMalas(){
        return 1;
    }

    toString(){
        return "Executiva: " + super.toString();
    }
}

class PrimeiraClasse extends Executiva{
    constructor(data,nroVoo,custoBase){
        super(data,nroVoo,custoBase);
    }

    totalPagar(){
        let extra = super.totalPagar() * 0.5;
        return super.totalPagar() + extra;
    }

    qtdadeMalas(){
        return 3;
    }

    acessoPrioritario(){
        return true;
    }

    toString(){
        return "Primeira classe: " + super.toString();
    }
}

globalThis.Passagem = Passagem

function qtdades(passagens){
    validate(passagens, "Array.<Passagem>");
    let contMalas = 0;
    let contPrioritario = 0;
    for(let p of passagens){
        if (p.acessoPrioritario() == true){
            contPrioritario++;
        }
        contMalas += p.qtdadeMalas();
    }
    return {
        "qtdadeMalas":contMalas,
        "qtdadePrioritarios":contPrioritario
    }
}

let passagens = [];
passagens.push(new Executiva("10/03/2023",1010,500));
passagens.push(new PrimeiraClasse("10/03/2023",1010,500));
passagens.push(new Economica("10/03/2023",1010,500));
passagens.push(new Executiva("10/03/2023",1010,500));
passagens.push(new PrimeiraClasse("10/03/2023",1010,500));

let resp = qtdades(passagens);
console.log(resp);