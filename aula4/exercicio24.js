/* Analise a classe ContaCorrente abaixo. Acrescente o tratamento
de operacoes invalidas(saldo inicial, depositos ou saques 
negativos). Trate tambem o fato de que as operacoes de retirada
nunca podem deixar o saldo negativo. Crie uma exceção específica
para indicar este tipo de situacao */

import { validate } from "bycontract";

class SaldoInsuficienteError extends Error{
    #saldoAtual;
    #retiradaDesejada;

    constructor(saldoAtual,retiradaDesejada){
        super("Saldo insuficiente!");
        this.#saldoAtual = saldoAtual;
        this.#retiradaDesejada = retiradaDesejada;
    }

    get saldoAtual(){
        return this.#saldoAtual;
    }

    get retiradaDesejada(){
        return this.#retiradaDesejada;
    }
}

class ContaCorrente{
    #saldo;

    constructor(saldoInicial){
        validate(saldoInicial,"number");
        if(saldoInicial < 0) throw new Error("Saldo inicial invalido.")
        this.#saldo = saldoInicial;
    } 

    deposito(valor){
        validate(valor, "number");
        if (valor < 0) throw new Error ("Valor de deposito invalido.");
        this.#saldo += valor;
    }

    retirada(valor){
        validate(valor, "number");
        if (valor < 0) throw new Error ("Valor de retirada invalido.");
        if (this.saldo - valor < 0){
            throw new SaldoInsuficienteError(this.#saldo,valor);
        }
        this.#saldo -= valor;
    }

    get saldo(){
        return(this.#saldo);
    }
}

