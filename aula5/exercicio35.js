/* Em um jogo de acao a classe Personagem modela um personagem com as
seguintes caracteristicas:
nome: string
ataque: number (10)
defesa: number (10)
choque: boolean (false)
agua: boolean (false)
vento: boolean (false)
fogo: boolean (false)
Todos estes atributos devem ser informados no metodo construtor.
O nome é um parametro obrigatorio, mas os demais podem assumir
valores default indicados acima. Crie a classe Personagem explorando
desestruturacao de objetos recebidos por parametro. Acrescente
"getters" para todos as propriedades e um "getter" adicional chamado
configuracao que retorna os 4 booleanos simultaneamente. Escreva
a classe e um exemplo de uso. */

class Personagem{
    #nome
    #ataque
    #defesa
    #choque
    #agua
    #vento
    #fogo
    constructor({nome=undefined,ataque=10,defesa=10,choque=false,agua=false,vento=false,fogo=false}){
        if (nome == undefined){
            throw new Error('Nome indefinido');
        }    
        this.#nome = nome;
        this.#ataque = ataque;
        this.#defesa = defesa;
        this.#choque = choque;
        this.#agua = agua;
        this.#vento = vento;
        this.#fogo = fogo;   
    }

    get nome(){ return this.#nome;}
    get ataque(){ return this.#ataque;}
    get defesa(){ return this.#defesa;}
    get choque(){ return this.#choque;}
    get agua(){ return this.#agua;}
    get vento(){ return this.#vento;}
    get fogo(){ return this.#fogo;}

    get configuracao(){
        return{
            choque:this.choque,
            agua:this.agua,
            vento:this.#vento,
            fogo:this.fogo
        }
    }
    toString(){
        return `Nome:${this.nome}, Ataque: ${this.ataque}, defesa:${this.defesa}`;
    }
}

let p = new Personagem({nome:'Inspired',ataque:100,fogo:true});
console.log(p.toString());
console.log(p.configuracao);