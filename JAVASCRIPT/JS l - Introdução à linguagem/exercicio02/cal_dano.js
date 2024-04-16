// Solicita ao usuário que insira o nome do atacante e seu poder de ataque
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
);
