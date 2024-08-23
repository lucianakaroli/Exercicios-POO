const p = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, new Error("falha"));
});
setTimeout(console.log, 0, p);
setTimeout(console.log, 3000, p);
