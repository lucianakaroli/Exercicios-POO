/* Criando funcao de comparacao para ordenacao */

function criarFuncaoComparacao(nomePropriedade){
    return (objeto1,objeto2) => {
        const valor1 = objeto1[nomePropriedade];
        const valor2 = objeto2[nomePropriedade];
        if (valor1 < valor2) return -1;
        if (valor1 > valor2) return 1;
        return 0;
    };
}
const compare = criarFuncaoComparacao("nome");
const resultado = compare({nome:"Maria"}, {nome:"João"});
console.log(resultado);