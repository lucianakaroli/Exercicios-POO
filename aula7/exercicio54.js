/* Dada uma funcao mais geral,mais currificada, atraves da aplicacao parcial criar funcoes mais 
especificas que podem ser reutilizadas */ 

const get = propriedade => (objeto => objeto[propriedade]);
const getId = get("id");
let objetos = [{id: 1, nome:"Ana"}, {id:2, nome:"Beatriz"}, {id: 3, nome:"Carlos"}];
let ids = objetos.map(getId);
console.log(ids); 