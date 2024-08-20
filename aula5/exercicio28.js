/* Um TAD Queue(fila) é uma estrutura do tipo (First In, Last Out),
isto é, o primeiro elemento que entra é o primeiro que sai. Em outras
palavras modela uma fila de elementos. Sua logica pode ser vista na 
figura abaixo. Implemente um TAD Queue que disponha das seguintes
operacoes:
enqueue: insere um elemento no fim da fila (ultimo)
dequeue: remove o primeiro elemento da fila
first: retorna o primeiro elemento da fila
last: retorna o ultimo elemento da fila
size: retorna a quantidade de elementos na fila
Implemente o TAD e um exemplo de uso. */

export class Queue{
    #base;

    constructor(){
        this.#base = [];
    }

    enqueue(valor){
        this.#base.push(valor);
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base.splice(0,1)[0];
    }

    isEmpty(){
        return this.size === 0;
    }

    get size(){
        return this.#base.length;
    }

    get first(){
        if(this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base[0];        
    }

    get last(){
        if(this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base[this.size-1];        
    }
}
