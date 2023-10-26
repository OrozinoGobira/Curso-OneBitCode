const atacante = prompt ("Nome do personagem: ")
const PoderDeAtaque = parseFloat(prompt("Poder de ataque: "))

const Defensor = prompt("Nome do defensor: ")
let pontosDeVida = parseFloat(prompt("Ponto de vida:"))
const poderDeDefesa = parseFloat(prompt("Poder de defesa: "))
const escudo = prompt("Possui escudo? (sim/nao")

let dano = 0

if(PoderDeAtaque > poderDeDefesa && escudo == "nao"){
   dano = PoderDeAtaque - poderDeDefesa
   alert ("O dano causado foi de " + dano +"danos")
} else if ( PoderDeAtaque > poderDeDefesa && escudo == "sim"){
  dano = (PoderDeAtaque - poderDeDefesa) / 2
 alert ("O dano causado foi de" + dano + "danos")
} else {
      alert("não teve dano")
}
pontosDeVida -= dano

alert (
      "Informações sobre o combate\n" +
      "\n Nome do atacante: " + atacante +
      "\nPoder de ataque:" + PoderDeAtaque + "\n" +
      "\nNome do defensor: "+ Defensor +
      "\npoder de defesa do defensor"+ poderDeDefesa +
      "\nVida do defensor:" + pontosDeVida +
      "\nPossui escudo?" + escudo +
      ("\nO dano causado foi de " + dano + " danos")
)

























/*const atacante = prompt("Nome do atacante: ")
const poderDeAtaque = parseFloat(prompt("seu poder de ataque: "))

const NomeAdversario = prompt ("Nome do adversario: ")
let PontoDeVida = parseFloat(prompt("Pontos de vida do adversario: "))
const PoderDeDefesaAdversario = parseFloat(prompt("Poder de defesa do adversario: "))
const escudoAdversario = prompt("O adversario possui escudo? (SIM/NAO) ")
 let dano = 0

 if (poderDeAtaque > PoderDeDefesaAdversario && escudoAdversario ==="Nao"){
 dano = poderDeAtaque - PoderDeDefesaAdversario
 } 
  else if (poderDeAtaque > PoderDeDefesaAdversario && escudoAdversario === "Sim"){
  dano = (poderDeAtaque - PoderDeDefesaAdversario) / 2
 } 
 PontoDeVida -= dano

 alert("O atacante " + atacante + " causou "+ dano + " pontos de dano em " + NomeAdversario)
  alert (atacante + "\nPoder de ataque: "+poderDeAtaque + "\n\n" +
        NomeAdversario +"\nPontos de vida: " + PontoDeVida +
        "\nPoder de defesa: "+ PoderDeDefesaAdversario + "\nPossui escudo: " + escudoAdversario
  ) */