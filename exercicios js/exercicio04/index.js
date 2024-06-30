let nomePiloto = prompt("Digite o nome do piloto: ")

let velocidade = 0
let novaVelocidade = prompt("Qual a velocidade que você gostaria de acelerar?")


let confirmacao = confirm(
    "Estamos acelerando para " + novaVelocidade + "km/h" +
    "\nGostaria de confirmar?"
)

if (confirmacao) {
    velocidade = novaVelocidade
}


if (velocidade <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocidade <= 40) {
    alert("Você está devagar, podemos aumentar mais ")
} else if (velocidade <= 80) {
    alert("Parece uma boa velocidade para manter")
} else if (velocidade <= 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automatico forçado")
}
alert("Piloto: "+ nomePiloto + "\nVelocidade: "+ velocidade +" km/h")