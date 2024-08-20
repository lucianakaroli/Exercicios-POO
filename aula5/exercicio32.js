/* Em uma universidade os alunos podem se matricular em diferentes 
disciplinas. Escreva uma funcao que recebe por parametro 3 listas,
cada uma correspondendo a relacao dos matriculados em 3 disciplinas
distintas - a saber "D1", "D2" e "D3" e imprime:
a) a lista dos alunos matriculados nas 3 disciplinas(sem repeticao).
b) a lista dos alunos que estao matriculados apenas em "D1".
c) a lista dos alunos matriculados simultaneamente em "D1" e "D2". */

function impRelacoes(d1,d2,d3){
    //matriculados em d1, d2 e d3
    let todos = new Set([...d1,...d2,...d3]);
    console.log("Todos matriculados em alguma turma: ");
    console.log(todos);

    //matriculados apenas em d1
    let D1 = new Set(d1);
    let D2 = new Set(d2);
    let D3 = new Set(d3);
    let D1menosD2 = new Set (Array.from(D1).filter(x => !D2.has(x)));
    let D1menosD3 = new Set (Array.from(D1menosD2).filter(x => !D3.has(x)));
    console.log("Matriculados somente em D1: ");
    console.log(D1menosD3);
    let interseccao = new Set (Array.from(D1).filter(x => D2.has(x)));
    console.log("Matriculados simultaneamente em D1 e D2: ");
    console.log(interseccao);
}

let ld1 = ["jorge","luis","marcia","janete","carla","rafael","melina"];
let ld2 = ["luis","marcia","marcelo","janete","mariana", "carla","rafael"];
let ld3 = ["luis","marcia","janete","mariana"];

impRelacoes(ld1,ld2,ld3);