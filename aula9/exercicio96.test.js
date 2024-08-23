import { jest } from '@jest/globals';
import { converterRealPara } from './exercicio96.js';


describe('converter', () => {
    const codigoMoeda = 'USD';
    const moedaEsperada = {
        codigo: 'USD',
        nome: 'Dólar dos Estados Unidos',
        cotacao: 0.1865881
    };
    const valorParaConversao = 2;
    const valorConvetidoEsperado = 0.3731762;
    globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(moedaEsperada)
    });


    beforeEach(() => {
        fetch.mockClear();
    });


    it('realiza a conversão de valor da moeda de BRL para USD', async () => {
        const resultado = await converterRealPara(codigoMoeda, valorParaConversao);
        expect(resultado).toBeCloseTo(valorConvetidoEsperado);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`http://servicobancocentral.com.br/codigo=${codigoMoeda}`);
    });


    it('gera uma exceção com código de moeda inválido', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 404
        });
        await expect(converterRealPara('ZZZ', valorParaConversao)).rejects.toBeInstanceOf(Error);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`http://servicobancocentral.com.br/codigo=ZZZ`);
    });
    
    it('gera uma exceção em caso de falha de rede', async () => {
        fetch.mockRejectedValueOnce(new TypeError('error'));
        await expect(converterRealPara(codigoMoeda, valorParaConversao)).rejects.toBeInstanceOf(TypeError);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`http://servicobancocentral.com.br/codigo=${codigoMoeda}`);
    });
});
