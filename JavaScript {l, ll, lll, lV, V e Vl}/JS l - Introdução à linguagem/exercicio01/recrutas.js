const nome = prompt("Qual é o seu nome?")
const sobrenome = prompt("Seu sobrenome:")
const  campoDeEstudo = prompt("Sua profissão: ")
const anoDeNascimento = parseFloat(prompt("Ano de nascimento:"))

alert (
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome Completo: " + nome + " " + sobrenome +
    "\nCampo de Estudo: " + campoDeEstudo +
    "\nIdade: " + (2023 - anoDeNascimento) + " anos"
)
