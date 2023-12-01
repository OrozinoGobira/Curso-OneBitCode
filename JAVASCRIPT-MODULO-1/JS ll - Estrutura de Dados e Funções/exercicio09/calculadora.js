// Função para realizar a soma de dois números
function soma() {
    const number1 = parseFloat(prompt("Digite o primeiro número: "));
    const number2 = parseFloat(prompt("Digite o segundo número: "));
    return number1 + number2;
}

// Função para realizar a subtração de dois números
function subtrair() {
    const number1 = parseFloat(prompt("Digite o primeiro número: "));
    const number2 = parseFloat(prompt("Digite o segundo número: "));
    return number1 - number2;
}

// Função para realizar a multiplicação de dois números
function multp() {
    const number1 = parseFloat(prompt("Digite o primeiro número: "));
    const number2 = parseFloat(prompt("Digite o segundo número: "));
    return number1 * number2;
}

// Função para exibir o menu e obter a escolha do usuário
function menu() {
    return prompt(
        "\n1. Somar os números: " +
        "\n2. Subtrair os números: " +
        "\n3. Multiplicar os números: " +
        "\n4. Sair"
    );
}

// Função principal que executa o programa
function executar() {
    let opcao = "";
    let resultado;

    do {
        opcao = menu();

        switch (opcao) {
            case "1":
                resultado = soma();
                break;
            case "2":
                resultado = subtrair();
                break;
            case "3":
                resultado = multp();
                break;
            case "4":
                alert("Encerrando...");
                break;
            default:
                alert("Opção inválida");
        }

        // Verifica se resultado não é undefined ou null antes de exibi-lo
        if (resultado !== undefined && resultado !== null) {
            alert("Resultado: " + resultado);
            break;
        } else {
            alert("Campo vazio");
        }
    } while (opcao !== "4");
}

executar();
