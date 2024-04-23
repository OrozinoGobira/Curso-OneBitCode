let menu = ""
const imovel = []

do{

menu = prompt(
    "Cadastro imovel" +
    "\nTotal de imoveis cadastrado: "+ imovel.length +
    "\n1 Adicionar Imovel" +
    "\n2. Consultar imovel" +
    "\n3. Sair "
)
switch(menu){
    case"1":
    let imoveis = {}
    imoveis.proprietario = prompt("Nome do proprietario do imovel: ")
    imoveis.quartos = prompt ("Quantidade de quartos: ")
    imoveis.banheiros = prompt("Quantidade de banheiros: ")
    imoveis.garagem = prompt ("Possui garagem (Sim/Nao")
    let confirmacao = confirm (
        "Gostaria de confirmar o imovel?"+
        "\nProprietario: " + imoveis.proprietario +
        "\nQuantidade de quartos: "+ imoveis.quartos +
        "\nQuantidade de banheiros: "+ imoveis.banheiros +
        "\nPossui garagem:"+ imoveis.garagem 
    )
    if(confirmacao){
        imovel.unshift(imoveis)
        alert("Imovel adicionado")
    }else{
        alert("Voltando para pagina inicial")
    }
    break
    case"2":
    for(let i = 0; i <imovel.length; i++){
        alert(
            "imovel:"+ (i+1) +
            "\nProprietario: "+ imovel[i].proprietario +
            "\nQuantidade de quartos: "+ imovel[i].quartos +
            "\nQuantidade de banheiros: "+ imovel[i].banheiros +
            "\nPossui garagem? "+ imovel[i].garagem 
        )
    }
    break
    case"3":
    alert("Saindo...")
    break
    default:
        alert("Opção invalida")
        break
}

}while(menu!=="3")





































/*
let imoveis = []; // Array que armazenará os imóveis
let menu = "";

do {
    // Menu de opções para o usuário
    menu = prompt(
        "Cadastro de imóveis:\n" +
        "\nTotal de imóveis cadastrados:" + imoveis.length +
        "\n1. Novo imóvel" +
        "\n2. Verificar imóvel" +
        "\n3. Sair"
    );

    // Switch para determinar a ação com base na escolha do usuário
    switch (menu) {
        case "1":
            // Opção 1: Novo imóvel
            let imovel = {};
            imovel.propriedade = prompt("Nome do proprietário: ");
            imovel.quartos = prompt("Quantidade de quartos: ");
            imovel.banheiros = prompt("Quantidade de banheiros: ");
            imovel.garagem = prompt("Possui garagem? (Sim/Não)");

            // Confirmação para salvar o imóvel
            const confirmacao = confirm(
                "Gostaria de salvar este imóvel?\n" +
                "\nProprietário: " + imovel.propriedade +
                "\nQuantidade de quartos: " + imovel.quartos +
                "\nQuantidade de banheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem
            );

            if (confirmacao === true) {
                alert("Imóvel cadastrado com sucesso!");
                imoveis.push(imovel);
            } else {
                alert("Voltando para a página principal");
            }
            break;
        case "2":
            // Opção 2: Verificar imóveis
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel: " + (i + 1) +
                    "\nProprietário: " + imoveis[i].propriedade +
                    "\nQuantidade de quartos: " + imoveis[i].quartos +
                    "\nQuantidade de banheiros: " + imoveis[i].banheiros +
                    "\nPossui Garagem? " + imoveis[i].garagem
                );
            }
            break;
        case "3":
            // Opção 3: Sair
            alert("Encerrando...");
            break;
        default:
            // Opção inválida
            alert("Opção inválida...");
    }

} while (menu !== "3"); // Continua o loop enquanto o usuário não escolhe a opção "Sair" */