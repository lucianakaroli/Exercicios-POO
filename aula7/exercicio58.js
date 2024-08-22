import { Either } from "./exercicio57.js";


const buscarAlgoFake = id => {
    if (id % 2 === 0) {
        return {id, nome: "um nome", preco: 1.99};
    } else {
        throw new Error("Não encontrado");
    }
};


const buscarAlgoEither = id => {
    try {
        const produto = buscarAlgoFake(id);
        return Either.of(produto);
    } catch (error) {
        return Either.left(`Produto não encontrado com ID: ${id}`);
    }
}


console.log(buscarAlgoEither(1).toString());
console.log(buscarAlgoEither(2).toString());


buscarAlgoEither(1).chain(console.log);
buscarAlgoEither(2).chain(console.log);
