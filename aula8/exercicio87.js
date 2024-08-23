//Realizar uma requisição HTTP POST
try {
    const uriBase = 'https://jsonplaceholder.typicode.com';
    const postagem = {
        userId: 1,
        title: 'Um teste de postagem',
        body: 'Um texto da mensagem'
    };
    const resposta = await fetch(`${uriBase}/posts`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(postagem)
    });
    if (resposta.ok) {
        const dadosJson = await resposta.json();
        console.log(dadosJson);
        const location = resposta.headers.get('Location');
        console.log(location);
    } else {
        console.log('POST status:', resposta.status);
        console.log('POST statusText:', resposta.statusText);
    }
} catch (error) {
    console.log('Falha no acesso ao web service:');
    console.log(error);
}
