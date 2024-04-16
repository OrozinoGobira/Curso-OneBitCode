function register(element){
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if(password === passwordConfirmation){
    alert("Usuario"+ username + " registrado")
  }else{
    alert("As senhas não conferem")
  }
}
































/*// Função para registrar um usuário
function register(element) {
    // Obtém os valores dos campos do formulário
    const username = element.children.username.value;
    const password = element.children.password.value;
    const passwordConfirmation = element.children.passwordConfirmation.value;

    // Verifica se a senha e a confirmação de senha são iguais
    if (password === passwordConfirmation) {
        // Se forem iguais, exibe uma mensagem de sucesso com o nome de usuário
        alert("Usuário " + username + " registrado!");
    } else {
        // Se não forem iguais, exibe uma mensagem informando que as senhas não conferem
        alert("As senhas não conferem");
    }
}
 */