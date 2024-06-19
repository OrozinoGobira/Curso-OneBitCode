const personagem = prompt ("Informe o nome do seu personagem: ")
const poderDeAtaque = parseFloat(prompt("Informe o poder de Ataque: "))

const oponente = prompt ("Informe o nome do seu oponente: ")
let PontoDeVida = parseFloat(prompt ("Informe a quantidade de vida: "))
const PoderDeDefesa = parseFloat(prompt ("Informe o poder de defesa do oponente: "))
const escudo = prompt ("Possui escudo? (Sim/Nao")
 
let dano = 0

if(poderDeAtaque > PoderDeDefesa && escudo === "nao"){
    dano = poderDeAtaque - PoderDeDefesa
    alert ("Dano causado foi de"+ dano)
} else if (poderDeAtaque > PoderDeDefesa && escudo === "sim"){
    dano =  (poderDeAtaque - PoderDeDefesa) / 2
    alert ("O dano causado foi de" + dano)
} else {
    alert("Não houve dano causado" + dano)
}
PontoDeVida -= dano
alert (
    "Dados do combate!" +
    "\nPersonagem: " + personagem +
    "\nPoder de Ataque: "+ poderDeAtaque +
    "\n\nOponente: "+ oponente +
    "\nPontos de vida: "+ PontoDeVida +
    "\nPossui Escudo?"+ escudo +
    "\nDano Causado: " + dano
)

































/*// Solicita ao usuário que insira o nome do atacante e seu poder de ataque
const atacante = prompt("Nome do atacante: ");
const poderDeAtaque = parseFloat(prompt("Seu poder de ataque: "));

// Solicita ao usuário que insira o nome do adversário, seus pontos de vida, poder de defesa e se possui escudo
const NomeAdversario = prompt("Nome do adversário: ");
let PontoDeVida = parseFloat(prompt("Pontos de vida do adversário: "));
const PoderDeDefesaAdversario = parseFloat(prompt("Poder de defesa do adversário: "));
const escudoAdversario = prompt("O adversário possui escudo? (SIM/NAO)");

// Variável para armazenar o dano causado durante o ataque
let dano = 0;

// Verifica se o poder de ataque é maior que o poder de defesa do adversário e se o adversário não possui escudo
if (poderDeAtaque > PoderDeDefesaAdversario && escudoAdversario.toLowerCase() === "nao") {
    dano = poderDeAtaque - PoderDeDefesaAdversario;
} 
// Verifica se o poder de ataque é maior que o poder de defesa do adversário e se o adversário possui escudo
else if (poderDeAtaque > PoderDeDefesaAdversario && escudoAdversario.toLowerCase() === "sim") {
    dano = (poderDeAtaque - PoderDeDefesaAdversario) / 2;
}

// Reduz os pontos de vida do adversário de acordo com o dano causado
PontoDeVida -= dano;

// Exibe um alerta informando sobre o ataque e mostrando informações sobre o atacante e o adversário
alert(
    "O atacante " + atacante + " causou " + dano + " pontos de dano em " + NomeAdversario
);

alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    NomeAdversario + "\nPontos de vida: " + PontoDeVida +
    "\nPoder de defesa: " + PoderDeDefesaAdversario + "\nPossui escudo: " + escudoAdversario
); */