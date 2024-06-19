let  baralho = []; // Array que armazenará as cartas
let opcao = "";

do {
    let cartas = "";

    // Contagem do número de cartas no baralho
    for (let i = 0; i < baralho.length; i++) {
        cartas = (i + 1);
    }

    // Menu de opções para o usuário
    opcao = prompt(
        "Nº de cartas: " + cartas +
        "\n1. Adicionar carta" +
        "\n2. Retirar carta" +
        "\n3. Sair"
    );

    // Switch para determinar a ação com base na escolha do usuário
    switch (opcao) {
        case "1":
            // Opção 1: Adicionar carta
            let adicionarCarta = prompt("Nome da carta: ");
            baralho.push(adicionarCarta);
            break;
        case "2":
            // Opção 2: Retirar carta
            let removerCarta = baralho.pop();
            if (removerCarta !== undefined) {
                alert("Carta removida: " + removerCarta);
            } else {
                alert("Não há carta");
            }
            break;
        case "3":
            // Opção 3: Sair
            alert("Saindo...");
            break;
        default:
            // Opção inválida
            alert("Opção inválida...");
    }

} while (opcao !== "3"); // Continua o loop enquanto o usuário não escolhe a opção "Sair"*/