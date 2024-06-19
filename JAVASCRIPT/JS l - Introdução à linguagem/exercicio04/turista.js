const turista = prompt ("Seja bem vindo,Turista! Informe seu nome: ")

let resultados = ""
let quant = 0

let cidade = prompt ("Você já visitou alguma cidade? (Sim/Nao")

while(cidade == "sim"){
  
    let cidades = prompt("Qual cidade você visitou?")
    quant ++
    resultados += "\n" + quant +  " º " + cidades
    cidade = prompt ("Você já visitou mais alguma cidade? (sim/nao")

}
alert(
    "Seja bem vindo "+ turista + "!" +
    "\n Todas as cidades que você visitou:" + 
    "\n" + resultados
    )




























/*
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
); */