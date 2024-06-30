let distanciaAnoLuz = parseFloat(prompt("Digite a distancia em anos-luz"))

let  menu = prompt
    ("Para qual unidade deseja converter? "+
        "\n1. Pasec(pc)" +
        "\n2. Unidade Astronômica(AU)"+
        "\n3. Quilometros(km)"+
        "\n4. sair"
    )
    let unidadeEscolhida
    let distanciaConvertida

    switch(menu){
        case"1":
         unidadeEscolhida = "Pasec (pc)"
         distanciaConvertida = distanciaAnoLuz * 0.306601
        break
        case"2":
         unidadeEscolhida = "Unidade Astronômica(AU)"
        distanciaConvertida = distanciaAnoLuz * 63231.1
        break
        case"3":
         unidadeEscolhida = "Quilometros(km)"
         distanciaConvertida = distanciaAnoLuz * 9.5 * Math.pow(10,12)
        break
        default:
         unidadeEscolhida = "Unidade não identificada"
         distanciaConvertida = "Conversão fora do corpo"
    }
alert("Distancia em anos-luz: "+ distanciaAnoLuz + "\nUnidade Escolhida: "+ unidadeEscolhida + "\nDistancia Convertida: "+ distanciaConvertida)