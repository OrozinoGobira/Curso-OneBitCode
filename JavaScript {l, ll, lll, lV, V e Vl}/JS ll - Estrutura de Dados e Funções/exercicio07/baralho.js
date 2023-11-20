let baralho = []
opcao = ""

 do{
 let cartas = ""

 for(let i = 0; i < baralho.length; i++){
    cartas =  (i+1)
}
opcao = prompt (
    "Nº de cartas: " + cartas +
    "\n1.Adicionar carta" +
    "\n2.Retirar carta" +
    "\n3. Sair"
)
  switch(opcao){
    case "1":
        let adicionarCarta = prompt("nome da carta: ")
         baralho.push(adicionarCarta)
         break
    case "2":
        let removerCarta = baralho.pop()
        if(removerCarta !== undefined){
            alert("Carta removida: "+ removerCarta)
        }else{
            alert("Não há carta")
        }
        break
    case "3":
        alert("Saindo...")
        break
    default:
        alert("Opção invalida...")
  }

}while(opcao != "3")