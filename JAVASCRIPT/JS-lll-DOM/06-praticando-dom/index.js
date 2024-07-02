function addContact(){
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'
   
  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText ='Nome: '
  const nameInput = document.createElement('input')
  nameInput.type ='text'
  nameInput.name = 'fullname'
  ul.appendChild(nameLi)
  nameLi.appendChild(nameInput)

  const phoneLi = document.createElement('li')
  phoneLi.innerText ='Telefone: '
  const phoneInput = document.createElement('input')
  phoneInput.type ='text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)



  contactSection.append(h3, ul)
}




































/*// Função para adicionar um novo contato
function addContact() {
    // Obtém uma referência para a seção com o ID 'contacts-list'
    const contactSection = document.getElementById('contacts-list');
  
    // Cria um novo elemento <h3> para o título do contato
    const h3 = document.createElement('h3');
    h3.innerText = "Contato";
  
    // Cria um novo elemento <ul> para a lista de informações do contato
    const ul = document.createElement('ul');
  
    // Adiciona um campo "Nome" à lista
    const nameLi = document.createElement('li');
    nameLi.innerText = "Nome: ";
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);
    ul.appendChild(document.createElement('br'));
  
    // Adiciona um campo "Telefone" à lista
    const phoneLi = document.createElement('li');
    phoneLi.innerText = "Telefone: ";
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);
    ul.appendChild(document.createElement('br'));
  
    // Adiciona um campo "Endereço" à lista
    const addressLi = document.createElement('li');
    addressLi.innerHTML = '<label for="address">Endereço: </label>';
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.id = 'address';
    addressLi.appendChild(addressInput);
    ul.appendChild(addressLi);
    ul.appendChild(document.createElement('br'));
  
    // Adiciona o título e a lista de informações do contato à seção de contatos
    contactSection.append(h3, ul);
  }
  
  // Função para remover o último contato adicionado
  function removeContact() {
    // Obtém uma referência para a seção com o ID 'contacts-list'
    const contactSection = document.getElementById('contacts-list');
  
    // Obtém todos os elementos <h3> e <ul> dentro da seção
    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');
  
    // Remove o último título e a última lista de contatos
    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);
  }
  */