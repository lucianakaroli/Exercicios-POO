/* Considere a hierarquia de classes de conta bancaria desenvolvida
no video anterior e faça o que se pede:
a) escreva uma funcao que recebe um arranjo de contas correntes e 
um valor de deposito inicial por parametroos e deposita o valor em
todas as contas.
b) escreva uma funcao que recebe um arranjo de contas correntes e 
um valor correspondente a uma taxa de juros por paramentro e 
credita os juros em todas as contas poupança.
c) escreva uma funcao que recebe um arranjo de contas correntes
por parametro e impreime na tela os numeros de conta seguidos do 
saldo de cada uma.
d) escreva um trecho de codigo que cria um arranjo com pelo menos
6 contas correntes envolvendo pelo menos uma de cada tipo. Em 
seguida chame a funcao criada no item a para fazer um deposito 
inicial de R$ 1000.00 em cada conta. Na sequencia chame a funcao
do item b para creditar jutos de 15% (0.015) em todas as contas
poupança. Em seguida deposite R$ 200.00 na conta armazenada no 
indice 4 do arranjo. Por fim chame a funcao criada no item c. */

import { validate } from "bycontract";

class ContaComum{
    #numero;
    #saldo;

    constructor(numero){
        validate(arguments, ["Number"]);
        this.#numero = numero;
        this.#saldo = 0;
    }

    get numero(){
        return this.#numero;
    }

    get saldo(){
        return this.#saldo;
    }

    deposito(valor){
        validate(arguments, ["Number"]);
        if (valor < 0){
            return false;
        }
        this.#saldo += valor;
        return true;
    }

    retirada(valor){
        validate(arguments, ["Number"]);
        if (valor < 0){
            return false;
        }
        if (this.#saldo-valor < 0){
            return false;
        }
        this.#saldo = this.#saldo - valor;
        return true;
    }
    // Será acionada a propriedade saldo sobrescrita
    toString(){
        return `Numero: ${this.#numero}, saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

class ContaPoupanca extends ContaComum{
    constructor(numero){
        validate(arguments, ["Number"]);
        super(numero);
    }

    computaJuros(taxa){
        validate(arguments, ["Number"]);
        if (taxa <= 0.0 || taxa > 1.0){
            return false;
        }
        let juros = this.saldo * taxa;
        this.deposito(juros);
    }
}

class ContaLimite extends ContaComum{
    #limite;

    constructor(numero,limite){
        validate(arguments, ["Number", "Number"]);
        super(numero);
        this.#limite = limite;
        this.deposito(limite);
    }

    get limite(){
        return this.#limite;
    }

    // Sobrescreve a propriedade saldo de maneira que o 
    // limite seja descontado para efeitos de consulta
    get saldo(){
        let s = super.saldo;
        s = s - this.limite;
        return s;
    }
}

globalThis.ContaComum = ContaComum;

function imprimeNrosSaldos(contas){
    validate(arguments, ["Array.<ContaComum>"]);
    for (let conta of contas){
        console.log(`Numero: ${conta.numero}, Saldo R$ ${conta.saldo.toFixed(2)}`);        
    }
}

function depositoInicial(contas,valor){
    validate(arguments, ["Array.<ContaComum>", "Number"]);
    for (let conta of contas){
        conta.deposito(valor);        
    }
}

function creditaJuros(contas,taxa){
    validate(arguments, ["Array.<ContaComum>", "Number"]);
    for (let conta of contas){
        if (conta instanceof ContaPoupanca){
            conta.computaJuros(taxa);
        }        
    }
}

let agencia = new Array();

agencia.push(new ContaComum(100));
agencia.push(new ContaPoupanca(110));
agencia.push(new ContaLimite(120,5000));
agencia.push(new ContaComum(101));
agencia.push(new ContaPoupanca(109));
agencia.push(new ContaLimite(145,3000));

depositoInicial(agencia,1000);
creditaJuros(agencia,0.025);
agencia[4].deposito(200);
agencia[5].retirada(4500);
imprimeNrosSaldos(agencia);