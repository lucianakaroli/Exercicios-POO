import { validate } from "bycontract";
import { Aluno } from "./exercicio46.js";


export class Turma {
    #numero;
    #professor;
    #alunos
    #qtdadeAlunos;


    constructor(nroTurma, nomeProfessor, vagas) {
        validate(arguments, ["Number", "String", "Number"]);
        if (nroTurma <= 0 || nomeProfessor.length == 0 || vagas <= 0) {
            this.#numero = -1;
        }
        this.#numero = nroTurma;
        this.#professor = nomeProfessor;
        this.#alunos = [];
        this.#qtdadeAlunos = 0;
    }


    get numero() { return this.#numero; }


    get professor() { return this.#professor; }


    get qtdadeAlunos() { return this.#qtdadeAlunos; }


    consultaAluno(matricula) {
        validate(arguments, ["Number"]);
        for (let i = 0; i < this.#qtdadeAlunos; i++) {
            if (this.#alunos[i].matricula === matricula) {
                return this.#alunos[i];
            }
        }
        return null;
    }


    matricular(aluno) {
        validate(arguments, [Aluno]);
        this.#alunos.push(aluno);
        this.#qtdadeAlunos++;
    }


    informaNota(matricula, nroNota, nota) {
        validate(arguments, ["Number", "Number", "Number"]);
        if (nota < 0.0 || nota > 10.0) {
            return false;
        }
        if (nroNota != 1 && nroNota != 2) {
            return false;
        }
        for (let i = 0; i < this.#qtdadeAlunos; i++) {
            if (this.#alunos[i].matricula == matricula) {
                if (nroNota == 1) {
                    this.#alunos[i].notaP1 = nota;
                    return true;
                } else if (nroNota == 2) {
                    this.#alunos[i].notaP2 = nota;
                    return true;
                } else {
                    return false;
                }
            }
        }
        return false;
    }


    aprovados() {
        return this.#alunos
            .filter(a => a.aprovado())
            .map(a => a.nome);
    }


    reprovados() {
        return this.#alunos
            .filter(a => !a.aprovado());
    }


    resultadoFinal() {
        return this.#alunos
            .map(a => ({ nome: a.nome, media: a.media(), aprovado: a.aprovado() }));
    }
}


