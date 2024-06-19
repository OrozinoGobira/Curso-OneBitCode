// Variável para armazenar a escolha do usuário no menu
let opcao = "";

// Loop do-while para continuar exibindo o menu até que o usuário escolha encerrar (opção 5)
do {
    // Exibe o menu e solicita uma opção ao usuário
    opcao = prompt(
        "Seja Bem Vindo\n" +
        "\nEscolha uma das opções abaixo: " +
        "\n1. Opção um" +
        "\n2. Opção dois" +
        "\n3. Opção três" +
        "\n4. Opção quatro" +
        "\n5. Encerrar"
    );

    // Utiliza um switch para realizar a ação correspondente à escolha do usuário
    switch (opcao) {
        case "1":
            alert("Você escolheu a opção 1");
            break;
        case "2":
            alert("Você escolheu a opção 2");
            break;
        case "3":
            alert("Você escolheu a opção 3");
            break;
        case "4":
            alert("Você escolheu a opção 4");
            break;
        case "5":
            alert("Você encerrou");
            break;
        default:
            // Exibe uma mensagem de opção inválida se a escolha do usuário não for reconhecida
            alert("Opção inválida");
    }
} while (opcao !== "5"); // Continua o loop enquanto o usuário não escolher a opção 5 (encerrar)*/ 