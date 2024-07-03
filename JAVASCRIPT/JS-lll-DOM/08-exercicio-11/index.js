function addPlayer() {
    const position = document.getElementById('position').value 
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
  
    const confirmacao = confirm(
        "Deseja escalar o jogador?\n" +
         "Posição: "+ position + 
         "\nNome: "+ name +
         "\nCamisa: ("+ number + ")"
    )

    if(confirmacao){
    const teamList = document.getElementById('escalacao')  
     const playerItem = document.createElement('li')
     playerItem.id='player-'+ number
     playerItem.innerText = position + " "+ name + " ("+ number + ")"
     teamList.appendChild(playerItem)

     document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
    }
}

function removePlayer(){
   const number = document.getElementById('numberToRemove').value
   const playerToRemove = document.getElementById('player-'+ number)

   if(playerToRemove){
    const confirmacao = confirm(
        "Deseja remover o jogador?" + playerToRemove.innerText + "?"
    )
     if(confirmacao){
        document.getElementById('escalacao').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ""
    }
}else{
        alert("Jogador não existe")
   }
}