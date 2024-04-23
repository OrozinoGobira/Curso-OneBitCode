let fila = []
let opcao = ""

do {
let pacientes = ""
for(let i = 0; i < fila.length; i++){
  pacientes +=(i + 1) + "º -" + fila[i] + "\n" 
}
opcao = prompt (
  "Pacientes:\n" + pacientes +
  "\nEscolha uma ação: " +
  "\n1. Novo paciente" +
  "\n2. Consultar paciente" +
  "\n3. Sair" 
)
switch(opcao) {
   case "1":
    const novoPaciente = prompt("Qual é o nome do paciente: ")
     fila.push(novoPaciente)
     break
    case "2":
      const pacienteConsultado = fila.shift()
      if
      (pacienteConsultado){
        alert(pacienteConsultado + "foi removido da fila")
      } else {
        alert("Não há pacientes")
      }
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção invalida")

}
}while(opcao !=="3")
























/*

























minhaLista = []; // Array que armazenará os pacientes
let menu = "";

do {
  let pacientes = "";

  // Construindo uma string com a lista de pacientes
  for (let i = 0; i < minhaLista.length; i++) {
    pacientes += "\n" + (i + 1) + " º - " + minhaLista[i];
  }

  // Menu de opções para o usuário
  menu = prompt(
    "Pacientes: " + pacientes +
    "\n1. Novo paciente" +
    "\n2. Consultar paciente" +
    "\n3. Sair"
  );

  // Switch para determinar a ação com base na escolha do usuário
  switch (menu) {
    case "1":
      // Opção 1: Adicionar novo paciente
      let novoPaciente = prompt("Nome do novo paciente:");
      minhaLista.push(novoPaciente);
      break;
    case "2":
      // Opção 2: Consultar paciente
      let pacienteRemovido = minhaLista.shift(); // Remove o primeiro paciente da lista

      if (pacienteRemovido) {
        alert(pacienteRemovido + " foi removido da fila");
        break;
      } else {
        alert("Não há paciente");
      }
      break;
    case "3":
      // Opção 3: Sair
      alert("Encerrando...");
      break;
    default:
      // Opção inválida
      alert("Opção inválida");
  }

} while (menu !== "3"); // Continua o loop enquanto o usuário não escolhe a opção "Sair"
*/