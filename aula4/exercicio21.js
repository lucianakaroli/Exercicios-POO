/* Considerando o diagrama de classes do material implemente o
que se pede:
a) uma funcao que recebe uma lista de Taxavel por parametros e 
retorne quantos sao Produtos, quantos sao Servico e quantos sao
Veiculo.
b) uma funcao que recebe uma lista de Taxavel por parametro e
imprime o valor medio do imposto dos veículos.
c) uma funcao que recebe uma lista de Entregavel por parametro
e retorna quantos sao produtos transportaveis.
d) uma funcao que recebe uma lista de Transportavel por parametro
e imprime o toral a ser gasto com o frete dos produtos. */

import { typedef, validate } from "bycontract";

//Interface transportavel
typedef("#Transportavel",
    {
        fragil: "bolean",
        valorFrete: "number",
    });

function isTransportavel(obj){
    return("Fragil" in obj &&
            "valorFrete" in obj);
}

//Interface taxável
typedef("#Taxavel",
    {
        valorImposto: "number",
    });

function isTaxavel(obj){
    return ("valorImposto" in obj);
}

//Hierarquia de classes

class Entregavel{
    #id;
    #descricao;

    constructor(id,descricao){
        validate(arguments, ["number", "string"]);
        this.#id = id;
        this.#descricao = descricao;
    }

    get id(){
        return this.#id;
    }

    get descricao(){
        return this.#descricao;
    }
}

//Produto é derivado de Coisa e implementa transportavel e taxavel
class Produto extends Entregavel{
    #preco;
    static #gerId = 1;

    constructor(descricao,preco){
        validate(arguments, ["string", "number"]);
        super(Produto.#gerId++,descricao);
        this.#preco = preco;
    }

    get preco(){
        return this.#preco;
    }

    //Implementa taxavel
    get valorImposto(){
        return(this.preco * 0.15);
    }

    //Implementa transportavel
    get fragil(){
        return false;
    }

    get valorFrete(){
        if (this.cep === "90000"){
            return this.#preco * 0.005;
        }
        return this.#preco * 0.01;
    }
}

class Servico extends Entregavel{
    #valorHora;

    constructor(id,descricao,valorHora){
        validate(arguments, ["number", "string", "number"]);
        super(id,descricao);
        this.#valorHora = valorHora;
    }

    get valorHora(){
        return this.#valorHora;
    }

    //Implementa taxavel
    get valorImposto(){
        return this.#valorHora * 0.05;
    }
}

class ServicoVoluntario extends Entregavel{
    #nomeVoluntario;

    constructor(id, descricao,nomeVol){
        validate(arguments, ["number", "string", "string"]);
        super(id,descricao);
        this.#nomeVoluntario = nomeVol;
    }

    get nomeVoluntario(){
        return this.#nomeVoluntario;
    }
}

class Veiculo{
    #placa;
    #ano;
    #valor;

    constructor(placa,ano,valor){
        validate(arguments, ["string", "number", "number"]);
        this.#placa = placa;
        this.#ano = ano;
        this.#valor = valor;
    }

    get placa(){
        return this.#placa;
    }

    get ano(){
        return this.#ano;
    }

    get valor(){
        return this.#valor;
    }

    //Implementa taxavel
    get valorImposto(){
        return this.#valor * 0.3;
    }
}

globalThis.Produto = Produto;
globalThis.Entregavel = Entregavel;

// Letra A
function qtdadeProdutosServ(taxaveis){
    validate(arguments, "Array.<Taxavel>");
    let qp = 0;
    let qs = 0;
    for (let t of taxaveis){
        if (t instanceof Produto){
            qp++;
        }
        if(t instanceof Servico){
            qs++;
        }
    }
    return{
        "qtdadeProd":qp,
        "qtdadeServ":qs
    };
}

//Letra B
function impostoMedioVeiculos(taxaveis){
    validate(taxaveis, "Array.<#Taxavel>");
    let soma = 0;
    let c = 0;
    for(let t of taxaveis){
        if (t instanceof Veiculo){
            soma += t.valorImposto;
            c++;
        }
    }
    let impostoMedio = soma/c;
    return{
        "impostoMedio":impostoMedio
    };
}

//Letra C
function qtdadeTransportaveis(entregaveis){
    validate(entregaveis, "Array.<Entregavel>");
    let t = 0;
    for(let e of entregaveis){
        if (isTransportavel(e)){
            t++;
        }
    }
    return{
        "qtdadeTransportaveis":t
    };
}

// Letra D
function freteTotal(transportaveis){
    validate(transportaveis, "Array.<#Transportavel>");
    let soma = 0;
    for(let t of transportaveis){
        soma += t.valorFrete;
    }
    return{
        "custoTotalFrete":soma
    };
}

