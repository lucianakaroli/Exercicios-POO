// Codigo a ser testado (possui defeitos)

export function quantidadeZeros(lista) {
    let contagem = 0;
    for(let i = 1; i < lista.length; i++) {
        if (lista[i] === 0) {
            contagem++;
        }
    }
    return contagem;
}