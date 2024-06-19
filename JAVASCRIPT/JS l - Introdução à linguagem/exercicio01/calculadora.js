// Solicita ao usuário que digite o primeiro número e converte para float, usando coalescência nula para atribuir 0 em caso de valor inválido
const number1 = parseFloat(prompt("Digite o primeiro número")) ?? 0;

// Solicita ao usuário que digite o segundo número e converte para float, usando coalescência nula para atribuir 0 em caso de valor inválido
const number2 = parseFloat(prompt("Digite o segundo número: ")) ?? 0;

// Realiza as quatro operações básicas com os números fornecidos
const soma = number1 + number2;
const subtracao = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;

// Exibe um alerta contendo os resultados das operações
alert(
    "Resultado das quatro operações dos números: " + number1 + " e " + number2 +
    "\nA soma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + mult +
    "\nDivisão: " + div 
);