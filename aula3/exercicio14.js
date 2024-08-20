/* Uma empresa ferroviária possui uma garagem onde ficam 
estacionados os vagoes de carga que nao estao sendo usados. Sobre
cada vagao armazena-se um identificador e a capacidade de carga.
Quando precisa montar um trem para atender uma viagem especifica
os vagoes sao selecionados entre os que estao escionados nesta 
garagem. Explore iteradores na garagem de maneira a permitir que
os vagoes sejam listados. Acrescente um metodo na garagem que 
permita a retirada de um vagao a partir de seu identificador.
Escreva as classes e um exemplo de uso. */

import { validate } from "bycontract";

class Vagao{
    #id;
    #capCarga;

    static #idGen = 0;

    constructor(capCarga){
        validate(arguments, ["Number"]);
        if (capCarga <= 0){
            this.#id = -1;
        }
        else{
            this.#capCarga = capCarga;
            Vagao.#idGen++;
            this.#id = Vagao.#idGen; 
        }
    }

    get id() {
        return this.#id;
    }

    get capCarga() {
        return this.#capCarga;
    }

    toString(){
        let str = `[Vagao: ${this.#id}, capCarga: ${this.capCarga}]`;
        return str;
    }

}

class GaragemVagoes{
    #vagoes;

    constructor(){
        this.#vagoes = [];
    }

    estaciona(vagao){
        validate(vagao,Vagao);
        if (vagao.id === -1){
            return false;
        }
        this.#vagoes.push(vagao);
        return true;
    }

    quantidade(){
        return this.#vagoes.length;
    }

    get vagoes(){
        return this.#vagoes.values();
    }

    retira(id){
        validate(id, "number");
        let v = undefined;
        if (this.quantidade()>0){
            for(let i = 0; i < this.quantidade(); i++){
                if(this.#vagoes[i].id === id){
                    v = this.#vagoes.splice(i,1);
                    break;
                }
            }
        }
        return v;
    }
}
let g = new GaragemVagoes();
let v1 = new Vagao(1000);
g.estaciona(v1);
g.estaciona(new Vagao(2000));
g.estaciona(new Vagao(2000));
for(let v of g.vagoes){
    console.log(v.toString());
}

g.retira(2);
console.log("----------")
for(let v of g.vagoes){
    console.log(v.toString());
}