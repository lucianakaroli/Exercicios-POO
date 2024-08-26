/* Estamos interessados na implementacao de um objeto Range capaz de producir uma sequencia de numeros naturais atraves de 
um interador. O construtor desse objeto deve receber o limite inferior (fechado) e superior (aberto) do intervalo de valores
a serem gerados. O limite infeior deve ser >= 0 e o limite superior nao pode ser menor que o limite infeior. */

export class Range {
    #de;
    #para;


    constructor(de, para) {
        if (de < 0) {
            throw new Error('Argumento "de" deve ser >= 0');
        }
        if (de > para) {
            throw new Error('Argumento "de" deve ser <= que argumento "para"');
        }
        this.#de = de;
        this.#para = para;
    }


    [Symbol.iterator] = () => {
        return {
            atual: this.#de - 1,
            fim: this.#para,
            next() {
                this.atual++;
                if (this.atual < this.fim) {
                    return { done: false, value: this.atual  };
                } else {
                    return { done: true };
                }
            }
        };
    }
}
