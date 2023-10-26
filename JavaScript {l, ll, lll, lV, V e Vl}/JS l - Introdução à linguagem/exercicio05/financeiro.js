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



































/*let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial: "))
let opcao = " "


do {
opcao = prompt (
    "Saldo disponivel: R$ " + saldo +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Adicionar R$400" +
    "\n4 Sair" 
)

switch (opcao){
    case "1":
        saldo+= parseFloat(prompt("Informe o valor a ser adicionado"))
        break
    case "2":
        saldo-= prompt("Informe o valor a ser removida")
        break
        case "3":
        let resposta = prompt("Gostaria de adicionar R$400? (Sim/Nao)")
        if(resposta.toLowerCase() ==="sim"){
            saldo += 400
            alert("R$400 adicionados ao saldo.")
        }else {
            alert("Voltando a pagina inicial")
        }
          break
          case "4":
        alert("Saindo...")
        break
    default:
        alert("opção invalida")
    }
}while (opcao !== "4") */