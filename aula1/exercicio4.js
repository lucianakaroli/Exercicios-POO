/* Em uma empresa a matricula de um funcionario é composta por uma 
sequencia de digitos (0-9) organizados em 2 campos: <nnnnnn>-<v>
O significado/formato desses campos é o que segue:
<nnnnnn> é um numero sequencial de  6 dígitos (completando com 
zeros a esquerda)
<v> é um digito verificador calculado da seguinte forma: somam-se
todos os dígitos da matrícula. Se a soma tiver mais de um dígito 
somam seus dígitos e assim sucessivamente até que se obtenhaa um
único dígito.
Exemplo: 21004537-4
conferindo o dígito verificador: 2 + 1 + 0 + 0 + 4 + 5 + 3 + 7 = 22
22 = 2 + 2 = 4
Escreva um programa que solicita ao usuário um número de matrícula 
sem o dígito verificador e imprime na tela o número com o dígito 
verificador.
Obs: Por simplicidade assuma que o numero  de matricula está correto
Exemplo de codigo que acessa os caracteres individuais de uma string:
    let stg = 'Dinamica de lacos de repeticao'
    for(let i=0;i<str.lengh;i++){
        console.log(str.at(i))
    }; */

import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

let matricula = prompt("Entre seu numero de matricula: ");
let digitos = matricula;
let soma = 0;
while (digitos.length != 1) {
    for(let i=0; i<digitos.length; i++) {
        soma = soma + Number(digitos.at(i));
    }
    digitos = String(soma);
    soma = 0;
}
matricula =  matricula + "-" + digitos;
console.log(`Numero de matricula completo ${matricula}`);