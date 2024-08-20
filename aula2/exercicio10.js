/* Altere a classe Carro de maneira que a mesma receba os valores dos
lados por paramentros no metodo construtor. Verifique os tipos dos
parametros recebidosusando 'bycontract' e se os valores recebidos sao
numeros positivosdiferentes de zero. Caso os valores recebidos sejam
invalidos, garanta que os metodos area, perimetro e toString respondam
deacordo. Trabalhe com campos privados e metodos de acesso de maneira
garantir o encapsulamento das classes. Escreva a classe e um exemplo
de uso. */

import { validate } from "bycontract";

class Carro{
    placa;
    marcaModelo;
    tamTanque;
    combNoTanque;
    consumo;

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

let c1 = new Carro();
c1.placa = "ABC1023";
c1.marcaModelo = "Chevrolet/Corsa";
c1.tamTanque = 45;
c1.combNoTanque = 30;
c1.consumo = 12;
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

