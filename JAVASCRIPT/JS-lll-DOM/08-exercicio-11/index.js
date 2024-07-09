function addPlayer(){
  
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    
    const confirmacao = confirm(
        "Gostaria de escalar o jogador? "+ position + " "+ name + "("+ number + ")" 
    )
    if(confirmacao){
        const playerItem = document.getElementById('escalacao')
        const player = document.createElement('li')
        player.id = "player-"+ number
        player.innerText = position + " "+ name + "("+ number + ")"
        playerItem.appendChild(player)

        document.getElementById('position').value = " "
        document.getElementById('name').value = " "
        document.getElementById('number').value = " "
    }
}

function removePlayer(){ 
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-'+number)

    if(!playerToRemove){
        alert("Não há jogadodor")
    }else{
     const confirmacao = confirm ("Deseja remover jogador? "+ playerToRemove.innerText + "?")
    if(confirmacao){
     document.getElementById('escalacao').removeChild(playerToRemove)
     document.getElementById('numberToRemove').value = ""
    
    }

    }
}
























