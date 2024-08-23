import { buscarPorCodigo } from './moedasRepositorio.js';

export class Conversor {
    async converterRealPara(codigoMoeda, valor) {
        const moeda = await buscarPorCodigo(codigoMoeda);
        if (!moeda) {
            throw new Error('Código de moeda inexistente');
        }
        return valor * moeda.cotacao;
    }
}