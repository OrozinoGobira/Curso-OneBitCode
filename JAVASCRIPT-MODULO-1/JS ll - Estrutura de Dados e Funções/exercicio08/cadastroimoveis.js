let imoveis = []
let menu = ""

do{

menu = prompt(
    "Cadastro de imoveis:\n" + 
    "\nTotal de imoveis cadastrados:" + imoveis.length +
    "\n1. Novo imovel" +
    "\n2. Verificar imovel"+
    "\n3. Sair"
)
 switch(menu) {
    case"1":
       let imovel = {}
       imovel.propriedade = prompt("Nome do proprietario: ")
       imovel.quartos = prompt("Quantidade de quartos: ")
       imovel.banheiros = prompt("Quantidade de banheiros: ")
       imovel.garagem = prompt("Possui garagem? (Sim/Não")
     
       const confirmacao = confirm (
        " Gostaria de salvar esse imovel? " +
        "\nProprietario: "+ imovel.propriedade +
        "\nQuantidade de quartos: " + imovel.quartos +
        "\nQuantidade de banheiros: "+ imovel.banheiros +
        "\nPossui garagem?" + imovel.garagem
        )
        if(confirmacao == true){
            alert("Imovel Cadastrado com sucesso!")
            imoveis.push(imovel)
           } else{
            alert("Voltando para pagina principal")
           }
           break
    case"2":
        for(let i = 0; i <imoveis.length; i++){
       
            alert(
                "imovel: " + (i + 1) +
                "\nProprietario: " +  imoveis[i].propriedade +
                "\nQuantidade de quartos: "+ imoveis[i].quartos +
                "\nQuantidade de banheiros: "+ imoveis[i].banheiros +
                "\nPossui Garagem? "+ imoveis[i].garagem 
            )
        }
    break
    case"3":
    alert("Encerrando...")
    break
    default:
        alert("Opção Invalida...")
 }

}while(menu !=="3")






























/*let imoveis = []
let opcao = ""

do{
    
    opcao = prompt(
     "Bem vindo(a) ao Cadastro de imoveis: \nTotal de imoveis: " + imoveis.length +
     "\nEscolha uma opção: \n1. Novo imovel \n2. Listar imoveis \n3. Sair"
    )


   switch(opcao){
    case"1":
    const imovel = {}
    imovel.proprietario = prompt ("Nome do proprietario: ")
    imovel.quartos = prompt ("Quantidade de quartos? ")
    imovel.banheiro = prompt("Quantidade de Banheiro?")
    imovel.garagem = prompt("O imovel tem garagem (Sim/Não)?")
    
    const confirmacao = confirm(
     "Salvar este imovel?\n"+
     "\nProprietario: " + imovel.proprietario +
     "\nQuartos: " + imovel.quartos +
     "\nBanheiros: "+ imovel.banheiro +
     "\nPossui garagem: "+ imovel.garagem
    )
    if(confirmacao){
        imoveis.push(imovel) 
    } 
    break
    case"2":
         
        for (let i = 0; i < imoveis.length; i++){
        alert(
            "imovel" + (i + 1 ) +
            "\nProprietario: "+ imoveis[i].proprietario +
            "\nQuartos: "+ imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiro +
            "\nPossui Garagem?" + imoveis[i].garagem
        )
    }
    break
    case"3":
   }

}while(opcao !=="3")*/