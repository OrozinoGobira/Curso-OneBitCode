let quantidade = 0
let opcao = ""

const nomeNave = prompt ("Qual é o nome da sua nave?")

 opcao = prompt ("Deseja entrar na dobra espacial?\n 1 -Sim \n2 - Nao ")

while(opcao === "1") {
    quantidade ++
    opcao = prompt ("Deseja realizar mais a proxima dobra?(sim/nao) ") 
}

alert(
    "Nome da Nave: "+ nomeNave +
    "\nQuantidade de dobras: " + quantidade

)