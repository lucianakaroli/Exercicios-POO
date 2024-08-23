class Moeda {
    #valor;
    #nome;
    constructor(v, n) {
        this.#valor = v;
        this.#nome = n;
    }
    get valor() {
        return this.#valor;
    }
    get nome() {
        return this.#nome;
    }
    toJSON() {
        return {
            valor: this.valor,
            nome: this.nome
        };
    }
}


class Cofrinho {
    #moedas;
    constructor() {
        this.#moedas = [];
    }
    get moedas() {
        return this.#moedas;
    }
    adicionar(m) {
        this.#moedas.push(m);
    }
    calcularTotal() {
        return this.#moedas.reduce((total, moeda) => total + moeda.valor, 0);
    }
    toJSON() {
        return {
            moedas: this.moedas
        };
    }
}


export { Moeda, Cofrinho };
