export function gerarNumeroCartao() {
    let numeros = [];
    for (let i = 0; i < 16; i++) {
        numeros += Math.floor(Math.random() * 10);
    }
    return numeros;
}

export function gerarCVC() {
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        numeros += Math.floor(Math.random() * 10);
    }
    return numeros;
}

export function gerarNumeroCasa() {
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        numeros += Math.floor(Math.random() * 10);
    }
    return numeros;
}