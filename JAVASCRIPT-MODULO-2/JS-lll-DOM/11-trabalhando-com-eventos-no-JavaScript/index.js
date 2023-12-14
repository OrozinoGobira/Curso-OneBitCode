// Função chamada ao clicar no botão de registro
function register(ev) {
    // Log do objeto de evento no console
    console.log(ev);
 
    // Acessa o elemento pai do botão (a seção que contém os inputs)
    const sectionElement = ev.currentTarget.parentNode;
 
    // Obtém os valores dos inputs de nome de usuário, senha e confirmação de senha
    const username = sectionElement.children.username.value;
    const password = sectionElement.children.password.value;
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value;
 
    // Verifica se a senha e a confirmação de senha são iguais
    if (password === passwordConfirmation) {
       // Se forem iguais, exibe um alerta de registro bem-sucedido
       alert("Usuário " + username + " registrado");
    } else {
       // Se não forem iguais, exibe um alerta de senhas não conferem
       alert("As senhas não conferem");
    }
 }
 
 // Seleciona o botão de registro pelo ID
 const button = document.getElementById('register-button');
 
 // Adiciona um ouvinte de evento de clique ao botão, chamando a função register
 button.addEventListener('click', register);
 
 // Função que remove o ouvinte de evento de clique do botão
 function removeListener() {
    // Remove o ouvinte de evento de clique do botão
    button.removeEventListener('click', register);
 
    // Exibe um alerta indicando que o evento foi removido
    alert('Evento removido');
 }
 
 // Adiciona um ouvinte de evento de sobreposição (mouseover) ao botão
 button.addEventListener('mouseover', function(ev) {
    // Log do elemento que está sendo sobreposto
    console.log(ev.target);
 });