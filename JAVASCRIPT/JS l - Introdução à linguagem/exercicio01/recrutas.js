// Solicita ao usuário que insira o nome
const nome = prompt("Qual é o seu nome?");

// Solicita ao usuário que insira o sobrenome
const sobrenome = prompt("Seu sobrenome:");

// Solicita ao usuário que insira a profissão (campo de estudo)
const campoDeEstudo = prompt("Sua profissão: ");

// Solicita ao usuário que insira o ano de nascimento e converte para float
const anoDeNascimento = parseFloat(prompt("Ano de nascimento:"));

// Calcula a idade subtraindo o ano de nascimento do ano atual (2023)
const idade = 2023 - anoDeNascimento;

// Exibe um alerta contendo os detalhes fornecidos pelo usuário
alert (
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome Completo: " + nome + " " + sobrenome +
    "\nCampo de Estudo: " + campoDeEstudo +
    "\nIdade: " + idade + " anos"
);
