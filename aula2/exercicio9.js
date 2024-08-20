/* Escreva uma classa JavaScript que modela um retângulo conforme a 
estrututa ao lado. Sobre o retângulo devemos armazenar o tamanho do
lado 1 e o tamanho do lado 2. A classe deve ter métodos para calcular
a área e o perímetro do retângulo. Escreva a classe e um exemplo de
uso 

class Retangulo{
    As propriedades devem armazenar o tamanho dos lados
    perimetro(){retorna o perímetro do retangulo}
    area(){retorna a área do retangulo}
}
*/

class Retangulo{
    lado1;
    lado2;

    perimetro(){
        let p = 2* this.lado1 + 2* this.lado2
        return p;
    }

    area(){
        let a = this.lado1 * this.lado2;
        return a;
    }

    toString(){
        let str = `lado1: ${this.lado1}, lado2: ${this.lado2}\n`;
        str += `Area: ${this.area()}, Perimetro: ${this.perimetro()}`;
        return str;
    }
}

let r1 = new Retangulo();
r1.lado1 = 10;
r1.lado2 = 20;
console.log(r1.toString());

let r2 = new Retangulo();
r2.lado1 = 15;
r2.lado2 = 40;
console.log(r2.toString());