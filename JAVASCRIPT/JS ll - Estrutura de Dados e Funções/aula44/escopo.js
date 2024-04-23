// Variável global
let pokemon = "Charmander";

// Função para evoluir o Pokémon
function evoluir() {
    pokemon = "Charmeleon";
}

// Exibe o valor inicial da variável global
console.log(pokemon); // Saída: Charmander

// Chama a função para evoluir o Pokémon
evoluir();

// Exibe o valor atualizado da variável global após a evolução
console.log(pokemon); // Saída: Charmeleon

// Função que tenta criar uma variável local, mas não terá sucesso
function criarAnimal() {
    let animal = "Gato";
}

// Chama a função para criarAnimal, mas a variável 'animal' é local e não pode ser acessada externamente
criarAnimal();
//console.log(animal); // Isso resultará em um erro, pois 'animal' não está definido

// Função para avaliar a nota e exibir informações
function avaliarNota(nota) {
    if (nota > 60) {
        // 'aprovado' é uma variável global (com 'var') e pode ser acessada fora do bloco if
        var aprovado = true;
        // 'situacao' é uma variável local (com 'let') e só pode ser acessada dentro do bloco if
        let situacao = "Aprovado";
    } else {
        var aprovado = false;
        let situacao = "Reprovado";
    }
    // Exibe informações
    console.log(nota);
    console.log(aprovado);
    //console.log(situacao); // Isso resultará em um erro, pois 'situacao' não está definido neste escopo
}

// Chama a função avaliarNota com diferentes notas
avaliarNota(83);
avaliarNota(49);