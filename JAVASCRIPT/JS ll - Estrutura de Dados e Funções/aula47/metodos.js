let pessoa = {
    nome: "Issaac",
    idade: 26,
    dizerOla(){
        console.log("Olá, mundo! Meu nome é: "+ this.nome)
    }
}


pessoa.dizerOla(pessoa)
console.log(pessoa)





























/*// Criando um objeto chamado "pessoa"

let pessoa = {
    // Definindo a propriedade "nome" com o valor "Isaac"
    nome: "Isaac",
    
    // Definindo a propriedade "idade" com o valor 26
    idade: 26,

    // Definindo um método "dizerOla" que imprime uma mensagem no console
    dizerOla() {
        // Usando "console.log" para exibir uma mensagem
        console.log("Olá, mundo! Meu nome é:" + this.nome);
        // A palavra-chave "this" se refere ao objeto atual, que é "pessoa" neste contexto.
    }
}

// Imprimindo o objeto "pessoa" no console
console.log(pessoa);

// Chamando o método "dizerOla" do objeto "pessoa"
pessoa.dizerOla();




/* 
 METODOS
metodos são funções atreladas a objetos
(ou seja) dentro do objeto pode atrelar uma função

typeOf console
"object"

typeof console.log
"function"
*/ 