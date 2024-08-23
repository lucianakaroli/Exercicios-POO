//Forma incorreta
/*
try {
    Promise.reject(new Error("Erro!"));
} catch (e) {
    console.error(e.message);
}
*/


//Forma correta


Promise.reject(new Error("Erro!"))
       .catch(e => console.error(e.message));
