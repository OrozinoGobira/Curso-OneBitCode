const nome =  prompt("Infome o primeiro nome ")
const sobrenome = prompt ("Informe o sobrenome: ")
const CampoDeEstudo = prompt ("Informe o campo de estudo")
const anoNascimento = prompt ("Qual é o ano de nascimento: ")

alert (
    "Recruta Cadastrado com sucesso!" +
    "\nNome completo: " + nome + " "+ sobrenome +
    "\nCampo de Estudo: " + CampoDeEstudo + 
    "\nIdade: " + (2024 - anoNascimento) 
)