const numero = prompt (
   "Olá, eu sou o robô da tabuada" +
   "Informe o numero que você deseja calcular a tabuada"
)

let = resultado = ""

for (let fator = 1; fator <=20; fator++){
   resultado += "->" + numero + " * " + fator + " = " + (numero * fator) + "\n"
}
alert ("Resultado da tabuade de " + numero + ": \n\n" + resultado)