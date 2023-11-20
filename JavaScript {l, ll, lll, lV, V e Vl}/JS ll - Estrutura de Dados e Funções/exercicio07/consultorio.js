const minhaLista = []
menu = ""

do{
  let pacientes = ""
  for(let i = 0; i < minhaLista.length; i++){
    pacientes += "\n" + (i + 1) + " º -" + minhaLista[i]
  }


  menu = prompt(
    "Pacientes: " + pacientes +
    "\n1.Novo paciente" +
    "\n2.Consultar paciente" +
    "\n3.Sair"
    )
    switch(menu){
      case "1":
       let novoPaciente = prompt("Nome do novo paciente:")
      minhaLista.push(novoPaciente)
       break
       case "2":
        let pacienteRemovido = minhaLista.shift();
        
        if(pacienteRemovido){
          alert(pacienteRemovido +"foi removido da fila")
          break
        }else {
          alert("Não há paciente")
        }
        case "3":
          alert("Encerrando...")
          break
        default:
          alert("Opção invalida")
    }


}while(menu != "3")