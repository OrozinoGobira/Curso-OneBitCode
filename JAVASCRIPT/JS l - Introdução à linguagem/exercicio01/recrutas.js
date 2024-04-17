let nome = prompt("Informe o primeiro nome do recruta: ")
let sobrenome = prompt("Informe o Sobrenome do recruta: ")
let CampoDeEstudo = prompt("Qual é o campo de estudo do recuta: ")
let anoNascimento = prompt("Qual é o ano de nascimento do recruta: ")

alert(
    'Recruta cadastrado com sucesso!: \n'+
     "\nNome Completo do recruta: " + nome + " " + sobrenome +  
     "\nCampo de estudo do recruta: " + CampoDeEstudo + 
     "\nIdade do recruta : " +  (2024 - anoNascimento
    ))
