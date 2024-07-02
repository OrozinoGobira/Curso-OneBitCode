let nave = prompt("Escreva o nome da nave: ")
let trocarCaracter = prompt("Informe o caracter que deseja substituir: ")
let addCaracter = prompt ("Informe o caracter que deseja adicionar: ")

let novaNave = ""

for(let pos = 0; pos < nave.length; pos++){
     if(nave[pos] === trocarCaracter){
          novaNave += addCaracter
     }else{
          novaNave += nave[pos]
     }
}

alert("O novo nome da nave é : "+ novaNave)