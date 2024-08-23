import { jest } from '@jest/globals';


describe('Conversor', () => {
    const codigoMoeda = 'USD';
    const moedaEsperada = {
        codigo: 'USD',
        nome: 'Dólar dos Estados Unidos',
        cotacao: 0.1865881
    };
    const valorParaConversao = 2;
    const valorConvetidoEsperado = 0.3731762;
    
    beforeEach(() => {
        jest.resetModules();
    });


    it('realiza a conversão de valor da moeda de BRL para USD', async () => {
        //Dublê para o método de busca
        const mockBuscarPorCodigo = jest.fn(() => moedaEsperada);
        //Dublê para o módulo
        jest.unstable_mockModule('./moedasrepositorio', () => {
            return {
                buscarPorCodigo: mockBuscarPorCodigo
            };
        });
        await import('./moedasRepositorio.js');
        const { Conversor } = await import('./conversor');
        //Conversor a ser testado com o dublê
        const conversorComMock = new Conversor();
        //Realizar a ação do teste
        const resultado = await conversorComMock.converterRealPara(codigoMoeda, valorParaConversao);
        expect(resultado).toBeCloseTo(valorConvetidoEsperado);
        expect(mockBuscarPorCodigo).toHaveBeenCalledTimes(1);
        expect(mockBuscarPorCodigo).toHaveBeenCalledWith(codigoMoeda);
    });
});
