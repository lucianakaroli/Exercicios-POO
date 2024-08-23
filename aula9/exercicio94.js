import { validate } from 'bycontract';


export class ContaCorrente {
    #saldo;


    constructor(saldoInicial) {
        validate(saldoInicial, "number");
        if (saldoInicial < 0) throw new Error('Saldo inicial inválido.');
        this.#saldo = saldoInicial;
    }


    depositar(valor) {
        validate(valor, "number");
        if (valor <= 0) throw new Error('Valor de depósito inválido.');
        this.#saldo += valor;
    }


    sacar(valor) {
        validate(valor, "number");
        if (valor <= 0) {
            throw new Error('Valor de saque inválido!');
        }
        if (this.#saldo - valor < 0) {
            throw new Error('Saldo insuficiente.');
        }
        this.#saldo -= valor;
    }


    get saldo() {
        return this.#saldo;
    }
}
