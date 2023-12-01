function soma (){
  const number1 = parseFloat(prompt("Digite o primeiro numero: "))
  const number2 = parseFloat(prompt("Digite o segundo numero: "))
  return number1 + number2
}
function subtrair(){
    const number1 = prompt("Digite o primeiro numero")
    const number2 = prompt("Digite o primeiro numero")
        return number1 - number2
}
function multp(){
    const number1 = prompt("Digite o primeiro numero: ")
    const number2 = prompt("Digite o primeiro numero: ")
    return number1 * number2
}

 function menu (){
     return prompt ( 
    "\n1. Somar os numeros : " +
    "\n2. subtrair os numeros: "+
    "\n3. multiplicar os numeros: " +
    "\n4. Sair" 
    )
 }

 function executar(){
    let opcao = ""
   let resultado
   do{
  opcao = menu()
     
  switch(opcao){
    case "1":
        resultado = soma(resultado="1", resultado="1")         
        break
    case "2":
        resultado = subtrair()
        break
    case "3":
        resultado = multp()
        break
    case "4":
        alert("Encerrando...")
        break
    default:
        alert("Opção invalida")
  }
  if(resultado){
    alert("Resultado:" + resultado)
    break
  }else {
    alert("campo vazio")
  }
   }while( opcao!== "4")
 }

executar()























/* // Função para calcular a área de um triângulo
function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo: "); // Solicita a entrada da base
    const altura = prompt("Informe a altura do triângulo: "); // Solicita a entrada da altura
    return base * altura / 2; // Calcula a área do triângulo e a retorna
}

// Função para calcular a área de um retângulo
function calcularAreaRetangulo() {
    const base = prompt("Informe a base do retângulo: "); // Solicita a entrada da base
    const altura = prompt("Informe a altura do retângulo: "); // Solicita a entrada da altura
    return base * altura; // Calcula a área do retângulo e a retorna
}

// Função para calcular a área de um quadrado
function calcularAreaQuadrado() {
    const lado = prompt("Informe o lado do quadrado: "); // Solicita a entrada do lado
    return lado * lado; // Calcula a área do quadrado e a retorna
}

// Função para calcular a área de um trapézio
function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio")); // Solicita a entrada da base maior
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio")); // Solicita a entrada da base menor
    const altura = parseFloat(prompt("Informe a altura do trapézio")); // Solicita a entrada da altura
    return (baseMaior + baseMenor) * altura / 2; // Calcula a área do trapézio e a retorna
}

// Função para calcular a área de um círculo
function calcularAreaCirculo() {
    const raio = prompt("Informe o raio do círculo: "); // Solicita a entrada do raio
    return (3.14 * raio * raio); // Calcula a área do círculo e a retorna
}

// Função para exibir o menu e obter a escolha do usuário
function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    );
}

// Função principal que executa o programa
function executar() {
    let opcao = "";

    do {
        opcao = exibirMenu(); // Exibe o menu e obtém a escolha do usuário
        let resultado;

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo(); // Chama a função para calcular a área do triângulo
                break;
            case "2":
                resultado = calcularAreaRetangulo(); // Chama a função para calcular a área do retângulo
                break;
            case "3":
                resultado = calcularAreaQuadrado(); // Chama a função para calcular a área do quadrado
                break;
            case "4":
                resultado = calcularAreaTrapezio(); // Chama a função para calcular a área do trapézio
                break;
            case "5":
                resultado = calcularAreaCirculo(); // Chama a função para calcular a área do círculo
                break;
            case "6":
                alert("Saindo..."); // Exibe uma mensagem de saída
                break;
            default:
                alert("Opção inválida"); // Exibe uma mensagem de opção inválida se a escolha do usuário for desconhecida
        }

        if (resultado) {
            alert("Resultado: " + resultado); // Exibe o resultado, se houver
        }

    } while (opcao !== "6"); // Continua o loop até que o usuário escolha sair
}

executar(); // Inicia o programa chamando a função executar
 */