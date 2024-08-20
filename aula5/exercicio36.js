/* O metodo estático entries da classe Object recebe um objeto 
qualquer por parametro e retorna um arranjo com pares 
["nome do atributo", valor] (teste )o funcionamento deste metodo. 
Sabendo d isso, escreva uma funcao que recebe por parametro um objeto
literal contendo os nomes e as idades dos integrantes de uma equipe
no formato abaixo e retorna:
o nome do integrante mais velho da equipe
o nome do integrante mais novo da equipe
a media de idade da equipe
Escreva a funcao e um exemplo de uso. */

function caracterizaEquipe(equipe){
    let dados = Object.entries(equipe);
    let soma = 0;
    let [nomeMaisNovo,idadeMaisNovo] = dados[0];
    let [nomeMaisVelho,idadeMaisVelho] = dados[0];
    for(let [nome,idade] of dados){
        if (idadeMaisNovo > idade){
            nomeMaisNovo = nome;
            idadeMaisNovo = idade;
        }
        if (idadeMaisVelho < idade){
            nomeMaisVelho = nome;
            idadeMaisVelho = idade;
        }
        soma += idade;
    }
    let media = soma / dados.length;
    return{
        maisNovo:nomeMaisNovo,
        maisVelho:nomeMaisVelho,
        idadeMedia:media
    }
}



let equipe = {
    ana:18,
    sergio:15,
    carolina:16,
    flavio:17
}
let resp = caracterizaEquipe(equipe);
console.log(resp);