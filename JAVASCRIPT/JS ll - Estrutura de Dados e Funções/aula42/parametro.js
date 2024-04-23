// Esta função recebe um argumento 'x' e exibe um alerta mostrando o dobro de 'x'.
function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2));
}

// Exemplos de uso da função dobro:
//dobro(5); // Chamando a função com o valor 5 como argumento
//dobro(7); // Chamando a função com o valor 7 como argumento
// dobro();  // Esta chamada gerará um erro, pois nenhum valor foi passado como argumento.

// Esta função recebe um argumento 'nome' com um valor padrão "Mundo!" e exibe um alerta com uma saudação.
function dizerOla(nome = "Mundo!") {
    alert("Olá" + nome + "!");
}

// Exemplos de uso da função dizerOla:
// dizerOla("Orozino");  // Chamando a função com o valor "Orozino" como argumento
// dizerOla();           // Chamando a função sem passar nenhum argumento, usará o valor padrão "Mundo!"

// Esta função recebe dois argumentos 'a' e 'b' e exibe um alerta com a soma de 'a' e 'b'.
function soma(a, b) {
    alert("A soma entre " + a + " e " + b + " é igual a " + (a + b));
}

// Exemplo de uso da função soma:
// soma(5, 5);  // Chamando a função com os valores 5 e 5 como argumentos

// Esta função cria um objeto 'usuario' com propriedades 'nome', 'email', 'senha' e 'tipo'.
// O argumento 'tipo' tem um valor padrão "admin" se não for fornecido.
function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome,  // É uma forma abreviada de escrever 'nome: nome'
        email,
        senha,
        tipo
    }
    console.log(usuario); // Exibe o objeto 'usuario' no console.
}

// Exemplo de uso da função criarUsuario:
// criarUsuario("João", "joao@email.com", "senha123");  // Criando um objeto de usuário sem especificar o tipo.

// Esta função recebe vários parâmetros, mas não realiza nenhuma ação com eles.
function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}

// Esta função recebe um objeto 'usuario' como argumento e pode acessar suas propriedades, como 'nome' e 'email'.
function objetosComoParametros(usuario) {
    // ... Você pode usar 'usuario.nome' e 'usuario.email' aqui.
}

// Exemplo de uso da função muitosParametros:
// muitosParametros("Nome", "Telefone", "Endereço", "Aniversário", "Email");

// Definindo um objeto 'dadosDoUsuario' com propriedades vazias.
const dadosDoUsuario = {
    nome: "Orozino",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: "",
}

// Chamando a função objetosComoParametros com o objeto 'dadosDoUsuario' como argumento.
objetosComoParametros(dadosDoUsuario);

// Exibindo o objeto 'dadosDoUsuario' no console, que agora pode ter sido modificado pela função objetosComoParametros.
console.log(dadosDoUsuario);