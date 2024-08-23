export class PilhaArray {
    #itens
    constructor() {
        this.#itens = [];
    }
    empilhar(elemento) {
        this.#itens.push(elemento);
    }
    desempilhar() {
        return this.#itens.pop();
    }
    get topo() {
        return this.#itens[this.#itens.length - 1];
    }
    get tamanho() {
        return this.#itens.length;
    }
    get vazia() {
        return this.#itens.length === 0;
    }
}
