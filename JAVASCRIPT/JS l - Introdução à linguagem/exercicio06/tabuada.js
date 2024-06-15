let number = parseFloat(prompt("Digite um numero: "))

resultado = ""

for( let i = 0; i<= 10; i++){
  resultado += ("\n" + "-> "+ number +" * " + i + " = " + number * i)
}

alert(
   "Resultado da multiplicação do numero:" + number + "\n"+    
   resultado
)



























/*// Solicita ao usuário que insira o número para calcular a tabuada
const numero = prompt(
   "Olá, eu sou o robô da tabuada. Informe o número que você deseja calcular a tabuada:"
);

// Variável para armazenar os resultados da tabuada
let resultado = "";

// Loop for para calcular a tabuada do número fornecido (de 1 a 20)
for (let fator = 1; fator <= 20; fator++) {
   // Concatena os resultados à string resultado
   resultado += "->" + numero + " * " + fator + " = " + (numero * fator) + "\n";
}

// Exibe um alerta com o resultado da tabuada
alert("Resultado da tabuada de " + numero + ":\n\n" + resultado);
*/