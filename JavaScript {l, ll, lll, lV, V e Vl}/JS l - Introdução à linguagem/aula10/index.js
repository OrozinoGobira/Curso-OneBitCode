nome = window.prompt ('Insira o seu nome:')

console.log (nome)
let confirmacao = confirm('Confirma essa ação '+ nome + ' ?') 
console.log (confirmacao)

if ( confirmacao == 0) {
    alert ('tente novamente mais tarde')
} else {
    alert ("Seja bem vindo " + nome)
}
