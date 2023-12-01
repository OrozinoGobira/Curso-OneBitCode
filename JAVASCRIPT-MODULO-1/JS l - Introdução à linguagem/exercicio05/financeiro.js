let valor_inicial = parseFloat(prompt("Valor inicial: R$"))
let menu = ""

do {
    menu = prompt (
     "Valor em caixa: R$" + valor_inicial + 
     "\n1.Adicionar dinheiro" +
     "\n2.Remover dinheiro" +
     "\n3.Sair da conta"
    )
    switch(menu){
    case "1":
         valor_inicial += parseFloat(prompt("qual valor deseja adicionar?"))
        break
    case "2":
        valor_inicial -= parseFloat(prompt("Valor que deseja remover: R$"))
        break
    case "3":
        alert("Saindo da conta")
        break
    default:
        alert("Opção invalida, tenta novamente.")
    }
} while(menu !=3)





























