import { somar } from './exercicio90.js';


describe('somar', () => {
    it('deve retornar 2 para 1 + 1', () => {
        const a = 1;
        const b = 1;
        const resultadoEsperado = 2; 
        const resultadoAtual = somar(a,b);
        expect(resultadoAtual).toBe(resultadoEsperado);
    });
});
