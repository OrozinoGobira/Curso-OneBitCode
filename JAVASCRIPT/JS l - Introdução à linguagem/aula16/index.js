// Usando um operador ternário para verificar se 6 é estritamente igual a 5
const resultado = (6 === 5) ? "Verdadeiro" : "Falso";
// Exibe o resultado no console
console.log(resultado);

// Solicita ao usuário que informe sua idade e armazena o valor na variável 'idade'
const idade = prompt("Informe sua idade: ");

// Verifica diferentes faixas etárias com base na idade informada pelo usuário
if (idade > 65) {
    alert("Você é idoso");
} else if (idade > 18) {
    alert("Você é adulto");
} else if (idade > 12) {
    alert("Você é adolescente");
} else {
    alert("Você é criança");
}