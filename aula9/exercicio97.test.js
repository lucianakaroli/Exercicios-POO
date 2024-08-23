import { PilhaArray } from './exercicio97.js';


describe('PilhaArray', () => {
    let pilha;


    beforeEach(() => {
        pilha = new PilhaArray();
    });


    describe('constructor', () => {
        it('deve inicializar a pilha vazia', () => {
            expect(pilha.tamanho).toBe(0);
            expect(pilha.vazia).toBe(true);
        });
    });


    describe('vazia', () => {
        it('deve retornar true se a pilha estiver sem elementos', () => {
            expect(pilha.vazia).toBe(true);
        });
        it('deve retornar false se a pilha contiver um elemento', () => {
            pilha.empilhar(1);
            expect(pilha.vazia).toBe(false);
        });
    });


    describe('tamanho', () => {
        it('deve retornar 0 se a pilha estiver sem elementos', () => {
            expect(pilha.tamanho).toBe(0);
        });
        it('deve retornar 1 se a pilha contiver um elemento', () => {
            pilha.empilhar(1);
            expect(pilha.tamanho).toBe(1);
        });
    });


    describe('topo', () => {
        it('deve retornar undefined se a pilha estiver sem elementos', () => {
            expect(pilha.topo).toBeUndefined();
        });
        it('deve retornar 1 se a pilha contiver 1 no topo sem remover', () => {
            pilha.empilhar(1);
            expect(pilha.topo).toBe(1);
            expect(pilha.tamanho).toBe(1);
        });
    });


    describe('empilhar', () => {
        it('dada uma pilha vazia deve inserir um elemento no topo', () => {
            pilha.empilhar(1);
            expect(pilha.vazia).toBe(false);
            expect(pilha.tamanho).toBe(1);
            expect(pilha.topo).toBe(1);
        });
        it('dada uma pilha não-vazia deve inserir um elemento no topo', () => {
            pilha.empilhar(1);
            pilha.empilhar(2);
            expect(pilha.vazia).toBe(false);
            expect(pilha.tamanho).toBe(2);
            expect(pilha.topo).toBe(2);
        });
    });


    describe('desempilhar', () => {
        it('dada uma pilha vazia deve retornar undefined', () => {
            const elemento = pilha.desempilhar();
            expect(elemento).toBeUndefined();
            expect(pilha.tamanho).toBe(0);
        });
        it('dada uma pilha de tamanho 1 deve remover e retornar o elemento no topo', () => {
            pilha.empilhar(1);
            const elemento = pilha.desempilhar();
            expect(elemento).toBe(1);
            expect(pilha.vazia).toBe(true);
            expect(pilha.tamanho).toBe(0);
        });
        it('dada uma pilha de tamanho 2 deve remover e retornar o elemento no topo', () => {
            pilha.empilhar(1);
            pilha.empilhar(2);
            const elemento = pilha.desempilhar();
            expect(elemento).toBe(2);
            expect(pilha.vazia).toBe(false);
            expect(pilha.tamanho).toBe(1);
        });
    });


    it('deve se comportar pela lógica LIFO', () => {
        pilha.empilhar(1);
        pilha.empilhar(2);
        pilha.empilhar(3);
        expect(pilha.desempilhar()).toBe(3);
        expect(pilha.desempilhar()).toBe(2);
        expect(pilha.desempilhar()).toBe(1);
        expect(pilha.desempilhar()).toBeUndefined();
    });
});
