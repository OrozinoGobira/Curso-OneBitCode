const primeiroVeiculo = prompt("Nome do primeiro veiculo: ")
const velPrimeiroVeiculo = parseFloat(prompt("Velocidade do primeiro veiculo: "))

const segundoVeiculo = prompt("Nome do segundo veiculo: ")
const velSegundoVeiculo = parseFloat(prompt("Velocidade do Segundo veiculo: "))

if (velPrimeiroVeiculo > velSegundoVeiculo) {
    alert("O veiculo " + primeiroVeiculo + "é mais rapido do que o "+ segundoVeiculo)
} else if (velSegundoVeiculo > velPrimeiroVeiculo){
    alert("O veiculo " + segundoVeiculo + " é mais rapido do que"+ primeiroVeiculo)
}
else {
    alert (primeiroVeiculo + "" + segundoVeiculo + "possui a mesma velocidade")
}
alert (
    "Todas as informações da corrida \n" +
    "\nNome do primeiro veiculo: " + primeiroVeiculo + 
    "\nVelocidade do primeiro veiculo"+ velPrimeiroVeiculo + " km/h" +
    "\nNome Segundo veiculo: "+ segundoVeiculo + 
    "\nVelocidade do segundo veiculo: "+ velSegundoVeiculo + "km/h"
)