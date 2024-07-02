function addInput() {
    // Obtém uma referência para o elemento <ul> com o ID 'inputs'
    const ul = document.getElementById('inputs');
  
    // Cria um novo elemento <li> que representará um item de lista
    const newLi = document.createElement('li');
  
    // Adiciona a classe 'list-item' ao novo elemento <li> (pode ser útil para estilos CSS)
    newLi.className = 'list-item';
  
    // Define o texto interno do novo elemento <li>
    newLi.innerText = 'Novo input: ';
  
    // Cria um novo elemento <input> que representará um campo de entrada
    const newInput = document.createElement('input');
  
    // Define o tipo do campo de entrada como 'text'
    newInput.type = 'text';
  
    // Define o nome do campo de entrada como 'input' (útil para formulários)
    newInput.name = 'input';
  
    // Adiciona o novo elemento <input> como filho do elemento <li>
    newLi.appendChild(newInput);
  
    // Adiciona o novo elemento <li> (com o elemento <input>) como filho do elemento <ul>
    ul.appendChild(newLi);
  }
