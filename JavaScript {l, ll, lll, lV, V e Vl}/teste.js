let imoveis = []
let opcao = ""

do {
   opcao = prompt (
      "Bem vindo ao cadastro de imoveis!\n\n" +
      "Quantidade de imoveis: " + imoveis.length +
      "\n1. Novo imovel" +
      "\n2. Listar imoveis" +
      "\n3. Sair"
   )
   switch(opcao){
      case "1":
         const imovel = {}

          imovel.proprietario = prompt ("Nome do proprietario?")
          imovel.quartos = prompt("Tem quantos quartos? ")
          imovel.banheiros = prompt("tem quantos banheiros?")
          imovel.garagem = prompt ("Possui garagem? (Sim/Não)")
             
          const confirmacao = confirm (
            "Propriedade: " + imovel.proprietario +
            "\nQuartos: "+ imovel.quartos +
            "\nBanheiros: "+ imovel.banheiros +
            "\nPossui garagem?" + imovel.garagem +
            "\nGostaria de confirmar o cadastro?"
          )
          if(confirmacao){
            imoveis.push(imovel)
            alert("Imovel cadastrado com sucesso!")
          }else {
            alert("Voltando para o menu inicial")
          }
          break
      case "2":
          for(let i = 0; i < imoveis.length; i++ ){
            alert(
               "imovel:"+ (i + 1) +
               "\nProprietario:" + imoveis[i].proprietario +
               "\nQuartos: " + imoveis[i].quartos +
               "\nBanheiros"+ imoveis[i].banheiros +
               "\nPossui garagem? "+ imoveis[i].garagem
            )
          }
         break
      case "3":
         alert("Sair...")
         break
      default:
         alert("Opção invalida.")
   }

}while (opcao !=="3")