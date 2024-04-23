// Solicita ao usuário o valor inicial na conta
let valor_inicial = parseFloat(prompt("Valor inicial: R$"));

// Variável para armazenar a escolha do usuário no menu
let menu = "";

// Loop do-while para continuar exibindo o menu até que o usuário escolha sair (opção 3)
do {
    // Exibe o menu e solicita uma opção ao usuário
    menu = prompt(
        "Valor em caixa: R$" + valor_inicial +
        "\n1. Adicionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair da conta"
    );

    // Utiliza um switch para realizar a ação correspondente à escolha do usuário
    switch (menu) {
        case "1":
            // Adiciona dinheiro à conta conforme a escolha do usuário
            valor_inicial += parseFloat(prompt("Qual valor deseja adicionar?"));
            break;
        case "2":
            // Remove dinheiro da conta conforme a escolha do usuário
            valor_inicial -= parseFloat(prompt("Valor que deseja remover: R$"));
            break;
        case "3":
            // Exibe uma mensagem de saída caso o usuário escolha sair
            alert("Saindo da conta");
            break;
        default:
            // Exibe uma mensagem de opção inválida se a escolha do usuário não for reconhecida
            alert("Opção inválida, tente novamente.");
    }
} while (menu !== "3"); // Continua o loop enquanto o usuário não escolher a opção 3 (sair)

// Após o loop, exibe o valor final na conta
alert("Saldo final: R$" + valor_inicial);
*/