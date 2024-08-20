/* Implemente uma classe que modela um baralho de cartas. O metodo
construtor deve incluir todas as 52 cartas no baralho. A interface
publica da classe deve ter metodos para:
a) embaralhar o baralho
b) retirar a carta que está no topo do baralho
c) inserir uma carta na parte de baixo do baralho */

import { validate } from "bycontract";
import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

class Carta{
    #naipe;
    #valor;
    #faceParaCima;

    constructor(naipe, valor){
        validate(arguments, ["String", "String"]);
        if(!this.verificaNaipe(naipe) ||
        !this.verificaValor(valor)){
            this.#naipe = "invalido";
            this.#valor = "invalido";
            return;
        }

        this.#naipe = naipe;
        this.#valor = valor;
        this.#faceParaCima = true;
    }

    valores(){
        return["A", "1", "2", "3", "4", "5",
                "6", "7", "8", "9", "10", "J", "Q", "K"];
    } 

    naipes(){
        return ["ouros", "paus", "espadas", "copas"];
    }

    toInt(){
        switch(this.#valor){
            case "A":
                return 14;
            case "K":
                return 13;
            case "Q":
                return 12;
            case "J":
                return 11;
            default:
                return Number(this.#valor);
        }
    }

    verificaNaipe (naipe){
        validate(arguments, ["String"]);
        naipe = naipe.toLowerCase();
        return this.naipes().includes(naipe);
    }


    verificaValor (valor){
        validate(arguments, ["String"]);
        valor = valor.toUpperCase();
        return this.valores().includes(valor);
    }

    get naipe(){
        return this.#naipe;
    }

    set naipe(n){
        if (!this.verificaNaipe(n)){
            this.#naipe = "invalido";
        }
        else {
            this.#naipe = n;
        }
    }

    get valor(){
        return this.#valor
    }

    set valor(val){
        if (!this.verificaValor(val)){
            this.#valor = "invalido";
        }
        else{
            this.#valor = val;
        }
    }

    virada(){
        return !this.#faceParaCima;
    }

    vira(){
        this.#faceParaCima = !this.#faceParaCima;
    }

    toString(){
        if (this.#naipe === "invalido" || this.#valor === "invalido"){
            return "Carta invalida";
        }
        let str = `${this.#valor}, ${this.#naipe}`;
        return str;
    }
}

class Baralho{
    #cartas;
    #topo;

    constructor(){
        this.#cartas = new Array(52);

        let aux = new Carta("ouros", "A");
        let naipes = aux.naipes();
        let valores = aux.valores();

        let c = null;

        this.#topo = 0;
        for (let n=0; n < naipes.length; n++){
            for(let v=0; v < valores.length; v++){
                c = new Carta(naipes[n], valores[v]);
                this.#cartas[this.#topo] = c;
                this.#topo++;
            }
        }
    }

    embaralha(){
        for (let i=0; i<1000; i++){
            let i1 = Math.floor(Math.random()*52);
            let i2 = Math.floor(Math.random()*52);
            let aux = this.#cartas[i1];
            this.#cartas[i1] = this.#cartas[i2];
            this.#cartas[i2] = aux;
        }
    }

    pegaDeCima(){
        if(this.#topo ==0){
            return null;
        }
        this.topo--;
        return this.#cartas[this.#topo];
    }

    quantidade(){
        return this.#topo;
    }

    insereEmbaixo(carta){
        validate(arguments, [Carta]);
        for (let i=this.#topo; i>0; i--){
            this.#cartas[i+1] = this.#cartas[i];
        }
    }

    toString(){
        let str = `Quantidade: ${this.#topo}`;
        for(let i=0; i<this.#topo; i++){
            str = str + `[${this.#cartas[i].toString()}]`;
        }
        return str+'\n';
    }
}

let b = new Baralho();
//b.embaralha();
console.log(b.toString());
let c1 = b.pegaDeCima();
console.log(c1);
console.log(b.toString());