/* Escreva um programa JavasScript que cria um array com 100 
numeros aleatorios entre -100 e 100. Em seguida o programa deve
chamar a funcao para:

a) multiplicar todas as posicoes negativas do arranjo por 2.
b) retornar o valor do arranjo.
c) retornar uma string com uma representacao formatada do arranjo.
   Ex: [10][-2][80][30] */

function randomInt(min,max){
    validate(arguments, ["Number", "Number"]);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function mulNeg(lst){
    validate(lst, "Number[]");
    for(let i=0; i<lst.lenght; i++){
        if (lst[i] < 0){
            lst[i] = lst[i] * -2;
        }
    }
    return lst;
}

function arranjoToString(dados){
    validate(dados, "Number[]");
    let str = "";
    for(let e of dados){
        str = str + '['+e+']';
    }
    return str;
}

function menor(lst){
    validate(lst, "Number[]");
    let menor = lst[0];
    for(let i=1; i<lst.lenght; i++){
        if(menor > lst[i]){
            menor = lst[i];
        }
    }
}

let nros = new Array(100);
for (let i=0; i<100; i++){
    nros[i] = randomInt(-100,100);
}
console.log(arranjoToString(nros));
console.log()
console.log(arranjoToString(mulNeg(nros)));
console.log()
console.log(menor(nros));
