// Solicita ao usuário que escolha uma alternativa e armazena o resultado na variável 'resultado'
const resultado = prompt("Escolha uma alternativa: \n a) \nb) \nc)");

// Converte o resultado para um valor numérico usando parseFloat
const resultadoNumerico = parseFloat(resultado);

// Utiliza a estrutura switch para realizar diferentes ações com base no valor numérico obtido
switch (resultadoNumerico) {
    case 1:
        // Se o valor numérico for 1, exibe a mensagem relacionada à alternativa 'a'
        alert("O resultado é 'a'");
        break;
    case 2:
        // Se o valor numérico for 2, exibe a mensagem relacionada à alternativa 'b'
        alert("O resultado é 'b'");
        break;
    case 3:
        // Se o valor numérico for 3, exibe a mensagem relacionada à alternativa 'c'
        alert("O resultado é 'c'");
        break;
    default:
        // Se o valor numérico não corresponder a nenhum dos casos anteriores, exibe uma mensagem padrão
        alert("Finalizando...");
}
