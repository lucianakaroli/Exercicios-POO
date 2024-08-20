/* Altere a classe "Carro" de maneira a garantir a consistência de
suas propriedades.Acrescente metodos para abastecer o carro 
respeitando a capacidade do tanque e para simular um deslocamento,
"gastando" combustivel. */


import { validate } from "bycontract";

class Carro{
    #placa;
    #marcaModelo;
    #tamTanque;
    #combNoTanque;
    #consumo;

    constructor(placa, marcaModelo, tamTanque, consumo){
        validate(arguments, ["string", "string", "number", "number"]);
        this.#placa = placa;
        this.#marcaModelo = marcaModelo;
        if (tamTanque < 0){
            this.#tamTanque = 45;
        }
        else{
            this.#tamTanque = tamTanque;
        }
        this.#combNoTanque = 0;
        if (consumo <= 0){
            this.#consumo = 10;
        }
        else{
            this.#consumo = consumo;
        }
    }

    get placa(){
        return this.#placa;
    }

    get marcaModelo(){
        return this.#marcaModelo;
    }

    get tamTanque(){
        return this.#tamTanque;
    }

    get combNoTanque(){
        return this.#combNoTanque;
    }

    get consumo(){
        return this.#consumo;
    }


    combustivelNecessario(distancia){
        validate(distancia, "Number");
        return distancia/this.consumo; 
    }

    podeViajar(distancia){
        validate(distancia, "Number");
        let cbNec = this.combustivelNecessario(distancia);
        if (cbNec <= this.combNoTanque){
            return true;
        }
        else{
            return false;
        }
    }

    toString(){
        let str = `Placa: ${this.placa}, MarcaModelo: ${this.marcaModelo}\n`;
        str += `Tamanho tanque: ${this.tamTanque}, combustivel no tanque: ${this.combNoTanque}\n`;
        str += `Consumo: ${this.consumo}`;
        return str;
    }
}

let c1 = new Carro("ABC1023", "Chevrolet/Corsa", 45, 12);
console.log(c1.toString());
let distancia = 300;
let cbNec = c1.combustivelNecessario(distancia);
console.log(`Combustivel necessario para viajar ${distancia}: ${cbNec}`);
if (c1.podeViajar(distancia) == true){
    console.log("Pode viajar");
}
else{
    console.log("Não pode viajar, abasteça primeiro.")
}

