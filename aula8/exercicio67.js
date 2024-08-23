const p = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "resultado");
});
setTimeout(console.log, 0, p);
setTimeout(console.log, 4000, p);
