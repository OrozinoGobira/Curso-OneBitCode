function calcularAreaTriangulo(){
    const base = prompt("Informe a base do trianguulo: ")
    const altura = prompt("Informe a altura do triangulo: ")
    return base * altura/2
}
 
function calcularAreaRetangulo(){
    const base = prompt("Informe a base do retangulo: ")
    const altura = prompt("Informe  a altura do retangulo: ")
    return base * altura
}

function calcularAreaQuadrado(){
    const lado = prompt("Informe o lado do quadrado: ")
    return lado*lado
}
function calcularAreaTrapezio(){
    const baseMaior = parseFloat(prompt("Informe a base maior do trapezio"))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapezio"))
    const altura = parseFloat(prompt("Informe a base altura do trapezio"))
    return (baseMaior + baseMenor) * altura / 2
}
 function calcularAreaCirculo(){
    const raio = prompt("Informe o raio do circulo")
    return 3.14 *raio* raio
 }
function exibirMenu(){
    return prompt(
        "Calculadora Geometrica\n" +
        "\n1. Calcular area de triangulo" +
        "\n2. Calcular area de retangulo"+ 
        "\n3. Calcular area de quadrado"+
        "\n4. Calcular area de trapézio"+
        "\n5. Calcular area de circulo"+ 
        "\n6. Sair\n"
    )
}

function executar(){
    let opcao = ""
    do{
    opcao = exibirMenu()
    let resultado 
  
    switch(opcao){
    case"1":
    resultado = calcularAreaTriangulo()
    case"2":
    resultado = calcularAreaRetangulo()
    case"3":
    resultado = calcularAreaQuadrado
    case"4":
    resultado = calcularAreaTrapezio
    case"5":
    resultado = calcularAreaCirculo
    case"6":
    alert("Saindo...")
    default:
        alert("Opção invalida.")
    }
    if(resultado){
        alert("Resultado: "+ resultado)
    }

    }while(opcao!=="6")
}


executar()




























/*// Função para realizar a soma de dois números
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
*/