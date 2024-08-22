import { Aluno } from "./exercicio59.js";
import { Turma } from "./exercicio60.js";

let poo = new Turma(10,'Bernardo Copstein',20);

let a1 = new Aluno(1025,'Jose Dias');
poo.matricular(a1);
poo.matricular(new Aluno(1026,'Aline Cantier'));
poo.matricular(new Aluno(1027,'Berenice Silva'));

poo.informaNota(1025,1,8);
poo.informaNota(1027,1,6);
poo.informaNota(1027,2,6);
poo.informaNota(1026,1,9);
poo.informaNota(1026,2,9);
poo.informaNota(1025,2,7);

console.log(`Aprovados: ${poo.aprovados()}`);
console.log(`Reprovados: ${poo.reprovados()}`);
console.log(poo.resultadoFinal());
console.log(`Media das notas finais: ${poo.mediaNotasFinais()}`);
