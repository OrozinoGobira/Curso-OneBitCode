let minhaLista = []
let opcao = ""

do{
  let pacientes = ""
  for( i = 0; i < minhaLista.length; i++){
    pacientes += "\n" + (i + 1) + "º - " + minhaLista[i]
}

 opcao = prompt(
    "Lista de pacientes:" + pacientes + "\n1. Adicionar paciente\n2. Paciente prioridade \n3. Consultar paciente \n4. Sair"
 )
  switch(opcao){
    case "1":
        let novoPaciente = prompt("Nome do paciente:")
        minhaLista.push(novoPaciente)
        break
        case"2":
         let pacientePrioridade = prompt("Nome do paciente prioridade:")
         minhaLista.unshift(pacientePrioridade)
         break
    case "3":
         const removerPaciente = minhaLista.shift()
         if(removerPaciente){
          alert(removerPaciente + " foi removido")
         }
         alert("Não há pacientes")
        break
    case "4":
        alert("sair")
        break
    default:
        alert("Opção invalida")
  }

}while(opcao !== "4")