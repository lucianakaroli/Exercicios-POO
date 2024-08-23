export async function somar(a, b) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Argumentos devem ser valores numéricos');
    }
    return a + b;
}
