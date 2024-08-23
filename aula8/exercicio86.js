//Realizar uma requisição HTTP GET
try {
    const uriBase = 'https://jsonplaceholder.typicode.com';
    const id = 1;
    const resposta = await fetch(`${uriBase}/posts/${id}`);
    if (resposta.ok) {
        const dadosJson = await resposta.json();
        console.log(dadosJson);
    } else {
        console.log('GET status:', resposta.status);
        console.log('GET statusText:', resposta.statusText);    
    }
} catch (error) {
    console.log('Falha no acesso ao web service:');
    console.log(error);
}