
// Solicita ao turista que insira seu nome
const turista = prompt("Eai turista, qual o seu nome?");

// Variáveis para armazenar as cidades visitadas e a contagem
let cidades = "";
let contador = 0;

// Pergunta se o turista já visitou alguma cidade
let continuar = prompt("Você já visitou alguma cidade? (sim/nao)?");

// Loop while para continuar perguntando sobre cidades enquanto o turista responder "sim"
while (continuar === "sim") {
    // Pergunta qual cidade o turista visitou
    let cidade = prompt("Qual cidade você já visitou?");
    // Incrementa a contagem e adiciona a cidade à lista
    contador++;
    cidades += "\n" + contador + "º " + cidade;

    // Pergunta se o turista visitou mais alguma cidade
    continuar = prompt("Você já visitou mais alguma cidade? (sim/nao)");
}

// Exibe um alerta com as informações coletadas
alert(
    "Nome do turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contador +
    "\nCidades visitadas: \n" + cidades
);