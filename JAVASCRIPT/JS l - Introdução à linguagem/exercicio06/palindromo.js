
// Solicita ao usuário que insira uma palavra
const palavra = prompt("Informe uma palavra: ");

// Variável para armazenar a palavra invertida
let palavraInvertida = "";

// Usa um loop for para inverter a palavra
for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

// Verifica se a palavra original é igual à palavra invertida
if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo");
} else {
    // Exibe uma mensagem indicando que a palavra não é um palíndromo
    alert(
        palavra + " não é um palíndromo!\n\n" +
        palavra + " !== " + palavraInvertida
    );
}