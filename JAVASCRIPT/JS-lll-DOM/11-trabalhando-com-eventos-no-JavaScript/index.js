function register(ev){
   console.log(ev)
   const section =ev.currentTarget.parentNode
   const username = section.children.username.value
   const password = section.children.password.value
   const passwordConfirmation = section.children.passwordConfirmation.value

if(password === passwordConfirmation){
   alert("Usuario "+ username + " registrado!")
}else{
   alert("As senhas não conferem!")
}
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListerner(){
  button.removeEventListener('click', register)
  alert("Remove element")
}

button.addEventListener('mouseover', function(ev){
   console.log(ev.currentTarget)
})
