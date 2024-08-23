export function stringBinParaNumber(binString) {
    if (!/^[01]+$/.test(binString)) {
        throw new Error('String em formato inválido');
    }
    return parseInt(binString, 2);
}