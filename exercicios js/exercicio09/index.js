let nave = prompt ("Informe o nome da nave: ")
let velocidade = 0 

function menu(){
    return prompt (
    "Seja bem vindo a bordo!"+
    "Escolha a opção que deseja\n"+
    "\n1. Acelerar a nave em 5km/h" +
    "\n2. Desacelerar a nave em 5km/h" +
    "\n3. Imprimir dados da nave " +
    "\n4. Sair"
  )
}

function acelerarNave(){
    velocidade += 5
}

function DesacelerarNave(){
    if(velocidade <= 0){
        alert("Nave parada!")
    }else{
        velocidade -= 5
    }
}

function visualizar(){
    alert("Nome da nave: "+ nave + "\nVelocidade atual: "+ velocidade + "km/s")
}


function executar(){
    
    do{
        opcao = menu()


        switch(opcao){
            case"1":
            acelerarNave ()
            break
            case"2":
            DesacelerarNave()
            break
            case"3":
            visualizar()
            break
            case"4":
            alert("Saindo...")
            break
            default:
                alert("Opção invalida")
        }

    }while (opcao !=="4")
}
executar()