import { stringBinParaNumber } from './exercicio92.js';


describe('stringBinParaNumber', () => {
    describe('dado uma string binária inválida', () => {
        it('contendo caracteres não numéricos 0 ou 1 deve lançar exceção', () => {
            //lançar uma exceção
            expect(() => stringBinParaNumber('abc')).toThrow();
            //lançar uma exceção específica
            expect(() => stringBinParaNumber('abc')).toThrow(Error);
            //laçar uma exceção que contenha uma string na mensagem de erro
            expect(() => stringBinParaNumber('abc')).toThrow('formato inválido');
        });
        it('contendo nenhum caractere deve lançar exceção', () => {
            expect(() => stringBinParaNumber('')).toThrow();
        });
    });
    describe('dado uma string binária válida', () => {
        it('deve retornar 0 para "0"', () => {
            expect(stringBinParaNumber('0')).toBe(0);
        });
        it('deve retornar 0 para "00"', () => {
            expect(stringBinParaNumber('00')).toBe(0);
        });
    });
});
