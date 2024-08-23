export async function buscarPorCodigo(codigo) {
    //Obs.:
    //chamada a um serviço que não existe
    //retornaria um objeto Moeda {codigo, nome, cotacao}
    const resposta = await fetch(`http://servicobancocentral.com.br/codigo=${codigoMoeda}`);
    if (resposta.ok) {
        const moeda = await resposta.json();
        return valor * moeda.cotacao;
    } else {
        return null;
    }
}
