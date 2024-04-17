// Solicita ao usuário que insira o nome e a velocidade do primeiro veículo
const primeiroVeiculo = prompt("Nome do primeiro veículo: ");
const velPrimeiroVeiculo = parseFloat(prompt("Velocidade do primeiro veículo: "));

// Solicita ao usuário que insira o nome e a velocidade do segundo veículo
const segundoVeiculo = prompt("Nome do segundo veículo: ");
const velSegundoVeiculo = parseFloat(prompt("Velocidade do segundo veículo: "));

// Compara as velocidades dos dois veículos e exibe mensagens correspondentes
if (velPrimeiroVeiculo > velSegundoVeiculo) {
    alert("O veículo " + primeiroVeiculo + " é mais rápido do que o " + segundoVeiculo);
} else if (velSegundoVeiculo > velPrimeiroVeiculo) {
    alert("O veículo " + segundoVeiculo + " é mais rápido do que " + primeiroVeiculo);
} else {
    alert(primeiroVeiculo + " e " + segundoVeiculo + " possuem a mesma velocidade");
}

// Exibe um alerta contendo todas as informações da corrida
alert(
    "Todas as informações da corrida:\n" +
    "\nNome do primeiro veículo: " + primeiroVeiculo +
    "\nVelocidade do primeiro veículo: " + velPrimeiroVeiculo + " km/h" +
    "\nNome do segundo veículo: " + segundoVeiculo +
    "\nVelocidade do segundo veículo: " + velSegundoVeiculo + " km/h"
);