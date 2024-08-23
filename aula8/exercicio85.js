const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("erro")), 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
});


Promise.race([p1, p2, p3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error.message);
    });


