// Inicializa o array listaDeCompras com dois elementos: "Açucar" e false
const listaDeCompras = ["Açucar", false];

// Exibe o conteúdo do array no console
console.log(listaDeCompras);

// Modifica alguns elementos do array
listaDeCompras[0] = "arroz"; // Altera o primeiro elemento para "arroz"
listaDeCompras[1] = "Feijão"; // Altera o segundo elemento para "Feijão"
listaDeCompras[2] = 7;        // Adiciona o número 7 como terceiro elemento
listaDeCompras[5] = "batata"; // Adiciona "batata" como sexto elemento

// Exibe o conteúdo do array após as modificações
console.log(listaDeCompras);

// Tenta acessar o elemento de índice 10 (que não existe no array)
console.log(listaDeCompras[10]);