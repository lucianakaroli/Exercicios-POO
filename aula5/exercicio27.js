/* Um TAD Stack (pilha) é uma estrutura do tipo (First in, Last Out),
idto é, o primeiro elemento que entra é o ultimo que sai. Em outras
palavras modela uma pilha de elementos. Sua lógica pode ser vista na
figura ao lado. Implemente um TAD Stack que disponha das seguintes
operacoes:
push: insere um elemento no topo do pilha
pop: remove o elemento do topo da pilha
top: retorna o elemento do topo da pilha
size: retorna a quantidade de elementos na pilha
isEmpty: retorna "true" se a pilha estiver vazia
Implemente o TAD e um exemplo de uso. */

export class Stack{
    #base;

    constructor(){
        this.#base = [];
    }

    push(valor){
        this.#base.push(valor);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack empty!");
        }
        return this.#base.pop();
    }

    isEmpty(){
        return this.size === 0;
    }

    get size(){
        return this.#base.length;
    }

    get top(){
        if(this.isEmpty()){
            throw new Error("Stack empty!");
        }
        return this.#base[this.size-1];        
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
while(!s.isEmpty()){
    console.log(s.pop());
}