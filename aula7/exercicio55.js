
const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];


const range = (a, b) => a > b ? [] : [a, ...range(a+1, b)];
const produto = arr => arr.reduce((p, a) => p * a);
const fatorialV2 = n => compose(produto,range)(1,n);
console.log(fatorialV2(4));
