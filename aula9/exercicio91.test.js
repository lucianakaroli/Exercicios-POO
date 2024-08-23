import { quantidadeZeros } from './exercicio91.js';


describe('quantidadeZeros', () => {
    it('deve retornar 0 para array []', () => {
        const array = [];
        const quantidadeEsperada = 0;
        const quantidadeAtual = quantidadeZeros(array);
        expect(quantidadeAtual).toBe(quantidadeEsperada);
    });
    it('deve retornar 0 para array [1]', () => {
        const array = [1];
        const quantidadeEsperada = 0;
        const quantidadeAtual = quantidadeZeros(array);
        expect(quantidadeAtual).toBe(quantidadeEsperada);
    });
    it('deve retornar 1 para array [0]', () => {
        const array = [0];
        const quantidadeEsperada = 1;
        const quantidadeAtual = quantidadeZeros(array);
        expect(quantidadeAtual).toBe(quantidadeEsperada);
    });
});
