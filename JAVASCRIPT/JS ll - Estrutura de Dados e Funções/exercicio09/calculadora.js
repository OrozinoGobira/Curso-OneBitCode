function calcularAreaTriangulo(){
    const base = prompt ("Informe a base do triangulo: ")
    const altura = prompt ("Informe a altura do triangulo: ")
    return base * altura / 2
}

function calcularAreaRetangulo(){
    const base = prompt("Informe a altura do retangulo: ")
    const altura = prompt("Informe a altura do retangulo: ")
    return base * altura
}
function calcularAreaQuadrado (){
    const lado = prompt("Informe o lado do quadrado")
      lado * lado
}
function calcularAreaTrapezio(){
    const baseMaior = parseFloat(prompt("Informe a base menor do trapezio"))
    const baseMenor = parseFloat(prompt ("Informe a base menor do trapezio"))
    const altura = prompt("Informe a altura do trapezio: ")
    return (baseMaior + baseMenor) * altura /2
}
function calcularAreaCirculo(){
    const raio = prompt ("Informe o valor do raio:")
    return 3.14 * raio * raio
}

function exibirMenu() {
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
    let opcao = " "
    do{
     opcao = exibirMenu()
     let resultado
     switch(opcao){
        case "1":
            resultado = calcularAreaTriangulo ()
            break
        case "2":
            resultado = calcularAreaRetangulo()
            break
        case "3":
            resultado = calcularAreaQuadrado()
            break
        case "4":
            resultado = calcularAreaTrapezio()
        case "5":
            resultado = calcularAreaCirculo()
        case "6":
            alert("Saindo...")
            break
        default:
        alert("Opção invalida")
     }
     if(resultado){
        alert("Resultado: "+ resultado)
     }

    }while(opcao !=="6")
}

executar()










