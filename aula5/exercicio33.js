/* Quando a conta corrente de um banco é criada, uma série de 
parametros sao assumidos como "default":
saldo inicial: R$ 0,00
limite de cheque especial: R$ 0,00
taxa de remuneracao do saldo em conta: 0,01
Escreva uma funcao que recebe por parametro o nome do correntista e o
numero da conta e retorna um objeto contendo numero da conta, nome,
saldo inicial, limite de cheque especial e taxa de remuneracao do
cheque especial.
Escreva a funcao e um exemplo de uso. */

function criaContaCorrente(umNumero,umNome){
    let padrao = {saldo:0,limite:0,rxRem:0.01};
    return{
        numero: umNumero,
        nome: umNome,
        ...padrao
    }
}

let cta = criaContaCorrente(102,"Carlos Alberto");
console.log(cta);