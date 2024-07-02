let nave = prompt("Informe o nome da nave: ")

let naveInverso = ""

for(let i = nave.length - 1; i >= 0; i --){
   
    if(nave[i] !== "e"){
        naveInverso += nave[i]
    }else{
        break
    }

}

alert("Nome da nave: "+ nave + "\n nome Inverso da nave: "+ naveInverso)