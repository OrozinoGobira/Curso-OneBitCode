const turista  = prompt("Eai turista, qual é o seu nome?")
let cidades = ""
let contador = 0

 let continuar = prompt ("Você já visitou alguma cidade? (sim/nao)")

while (continuar === "sim"){
  let cidade = prompt("Você já visitou qual cidade?")
  cidades += "\n" + "-" + cidade
  contador ++
   continuar = prompt("Você  visitou  alguma outra cidade? (sim/nao)")
}
alert(
    "Nome do turista" + turista +
    "\nQuantidade de cidades visitas: "+ contador +
    "\nCidades: " + cidades
)


























/*const turista = prompt ("Eai turista! Qual é o seu nome?")
let  cidades = "" // Uma string vazia para armazenar os nomes das cidades visitadas.
let contagem = 0 // Uma variável para rastrear a contagem de cidades visitadas.

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)") // Inicia um loop while que continuará enquanto a resposta for "Sim".

while (continuar === "Sim"){
    let cidade = prompt ("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n" // Adiciona o nome da cidade à lista de cidades.
    contagem ++ // Incrementa a contagem de cidades visitadas.
    continuar = prompt ("Você visitou alguma outra cidade? (Sim/Não)")
}

// Após o loop, exibe um alerta com informações sobre a viagem.
alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas: \n" + cidades
) */