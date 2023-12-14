// Função para adicionar um jogador à lista
function addPlayer() {
    // Obtém os valores dos campos de posição, nome e número do jogador do formulário
    const position = document.getElementById('position').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    
    // Cria uma mensagem de confirmação com os detalhes do jogador
    const confirmation = confirm("Escalar: " + name + " como " + position);
    
    // Se o usuário confirmar, adiciona o jogador à lista
    if (confirmation) {
        // Obtém a lista de jogadores
        const teamList = document.getElementById('teamList');
        
        // Cria um novo item de lista para o jogador
        const playerItem = document.createElement('li');
        playerItem.id = 'player-' + number;
        playerItem.innerText = position + " " + name + " (" + number + ")";
        
        // Adiciona o item de jogador à lista
        teamList.appendChild(playerItem);
        
        // Limpa os campos do formulário
        document.getElementById('position').value = "";
        document.getElementById('name').value = "";
        document.getElementById('number').value = "";
    }
}

// Função para remover um jogador da lista
function removePlayer() {
    // Obtém o número do jogador a ser removido
    const number = document.getElementById('numberToRemove').value;
    
    // Obtém o elemento do jogador a ser removido
    const playerToRemove = document.getElementById('player-' + number);
    
    // Cria uma mensagem de confirmação para remover o jogador
    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?");
    
    // Se o usuário confirmar, remove o jogador da lista
    if (confirmation) {
        playerToRemove.remove()
        //document.getElementById('teamList').removeChild(playerToRemove);
        document.getElementById('numberToRemove').value = '';
    }
}