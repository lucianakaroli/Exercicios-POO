/* O banco ACME trabalha com tres tipos de contas correntes
iddentificadas apenas pelo numero. As contas comuns que aceitam
deposito de quanquer valor e retiradas até o limite do saldo, as
contas limite, nas quais o cliente tem um limite até o qual pode
ficar com o saldo negativo e as contas poupança que sao 
equivalentes as contas comuns mas que de tempos em tempos recebem
juros sobre o valor depositado. Implemente a hierarquia de classes
e escreva um pequeno exemplo de uso.*/

import { validate } from "bycontract";

class ContaComum{
    #numero;
    #saldo;

    constructor(numero){
        validate(arguments, ["Number"]);
        this.#numero = numero;
        this.#saldo = 0;
    }

    get numero(){
        return this.#numero;
    }

    get saldo(){
        return this.#saldo;
    }

    deposito(valor){
        validate(arguments, ["Number"]);
        if (valor < 0){
            return false;
        }
        this.#saldo += valor;
        return true;
    }

    retirada(valor){
        validate(arguments,["Number"]);
        if (valor < 0){
            return false;
        }
        if(this.#saldo-valor < 0){
            return false;
        }
        this.#saldo = this.#saldo - valor;
        return true;
    }

    toString(){
        return `Numero: ${this.numero}, saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

class ContaPoupanca extends ContaComum{
    constructor(number){
        super(number);
    }

    computaJuros(taxa){
        validate(taxa, "number");
        if (taxa < 0.0 || taxa > 1.0){
            return false;
        }
        let juros = this.saldo * taxa;
        this.deposito(juros);
    }
}
class ContaLimite extends ContaComum{
    #limite;

    constructor(numero, limite){
        validate(arguments, ["number", "number"]);
        super(numero);
        this.#limite = limite;
        this.deposito(limite);
    }

    get limite(){
        return this.#limite;
    }

    get saldo(){
        let s = super.saldo;
        s = s - this.#limite;
        return s;
    }
}

let cp = new ContaPoupanca(102);
console.log(cp.toString());
cp.deposito(3000);
cp.computaJuros(0.1);
cp.retirada(100);
console.log(cp.toString());
console.log("---------------")
let c1 = new ContaLimite(200,1000);
console.log(c1.toString());
c1.retirada(200);
console.log(c1.toString());