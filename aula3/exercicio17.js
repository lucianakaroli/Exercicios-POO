/* Escreva uma funcao JavaScript que recebe a data, o numero do
voo, o custo base e dois boleanos (acessoVIP e bagagem) por 
parametro. A funcao deve retornar uma instancia de uma subclasse
de Passagem que atenda o especificado nos boleanos conforme a 
tabela ao lado. Escreva a funcao e um exemplo de uso que imprime
o custo da passagem retornada ou uma menagem adequada */

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

function criaPassagem(data, nroVoo, custo, vip, malas){
    validate(arguments, ["String", "Number", "Number", "Boolean", "Boolean"]);
    let passagem = undefined;
    if (vip === false && malas === false){
        passagem = new Economica(data, nroVoo, custoBase);
        return passagem;
    }
    if (vip === false && malas === true){
        passagem = new Executiva(data, nroVoo, custoBase);
        return passagem;
    }
    if (vip === true && malas === true){
        passagem = new PrimeiraClasse(data, nroVoo, custoBase);
        return passagem;
    }
    return passagem;
}
