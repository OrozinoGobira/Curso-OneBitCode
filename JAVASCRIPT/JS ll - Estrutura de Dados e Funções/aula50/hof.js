


// Função 'calcular' que aceita dois números e uma função de operação como parâmetros
function calcular(a, b, operacao) {
    console.log("Realizando uma operação.");
    const resultado = operacao(a, b);
    return resultado;
}

// Função 'somar' que realiza uma operação de soma
function somar(x, y) {
    console.log("Realizando uma soma.");
    return x + y;
}

// Chamando 'calcular' com a função 'somar' como argumento
console.log(calcular(3, 5, somar)); // Saída: Realizando uma operação. / Realizando uma soma. / 8

// Chamando 'calcular' com uma função de subtração anônima como argumento
console.log(calcular(8, 4, function(x, y) {
    console.log("Realizando uma subtração.");
    return x - y;
})); // Saída: Realizando uma operação. / Realizando uma subtração. / 4

// Função 'exibirElemento' que imprime informações sobre um elemento, seu índice e o array
function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    });
}

// Lista de frutas
const lista = ["Maçã", "Banana", "Laranja", "Limão"];

// Iteração sobre a lista usando um loop 'for'
for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista);
}

// Iteração sobre a lista usando o método 'forEach' com a função 'exibirElemento' como callback
lista.forEach(exibirElemento);

// Iteração sobre a lista usando o método 'forEach' com uma função de callback anônima
lista.forEach(function(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    });
});