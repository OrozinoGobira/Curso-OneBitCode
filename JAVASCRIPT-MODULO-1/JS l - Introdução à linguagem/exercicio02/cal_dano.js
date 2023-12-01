

const atacante = prompt("Nome do atacante: ")
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
  ) 