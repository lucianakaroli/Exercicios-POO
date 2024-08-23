import { somar } from './exercicio95.js';


describe('somar', () => {
    it('deve retornar 2 para 1 + 1', async () => {
        const resultado = await somar(1,1);
        expect(resultado).toBe(2);
    });
    it('deve retornar 2 para 1 + 1', async () => {
        expect.assertions(1);
        await expect(somar(1,1)).resolves.toBe(2);
    });
    it('deve gerar exceção para 1 + "a"', async () => {
        expect.assertions(1);
        try {
            await somar(1,'a');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
    it('deve gerar exceção para 1 + "a"', async () => {
        expect.assertions(1);
        await expect(somar(1,'a')).rejects.toBeInstanceOf(Error);
    });
});
