// Definição da função "calcular" que recebe dois números e uma função de operação.
function calcular(a, b, operacao) {
    console.log("Realizando uma operação");
    const resultado = operacao(a, b);
    return resultado;
 }
 
 // Definição da função "somar" que recebe dois números e retorna a soma deles.
 function somar(x, y) {
   console.log("Realizando uma soma");
   return x + y;
 }
 
 // Chamada da função "calcular" com os valores 3, 5 e a função "somar" como operação.
 console.log(calcular(3, 5, somar));
 
 // Chamada da função "calcular" com os valores 8, 4 e uma função anônima que realiza uma subtração.
 console.log(calcular(8, 4, function(x, y) {
     console.log("Realizando uma subtração");
     return x - y;
 }));
 
 // Definição da função "exibirElemento" que recebe um elemento, um índice e um array e imprime informações sobre eles.
 function exibirElemento(elemento, indice, array) {
     console.log({
         indice,
         elemento,
         array
     });
 }
 
 // Criação de uma lista de frutas.
 const lista = ["Maça", "Banana", "Laranja", "Limão"];
 
 // Loop "for" que chama a função "exibirElemento" para cada elemento da lista.
 for (let i = 0; i < lista.length; i++) {
     exibirElemento(lista[i], i, lista);
 }
 
 // O método "forEach" é usado para chamar a função "exibirElemento" para cada elemento da lista.
 lista.forEach(exibirElemento);
 
 // O método "forEach" é usado novamente, mas desta vez com uma função anônima que imprime informações sobre os elementos.
 lista.forEach(function(elemento, indice, array) {
     console.log({
         elemento,
         indice,
         array
     });
 });

 /* 
 Vou comentar sobre cada parte do código, explicando o que está acontecendo em cada tag e função:

function calcular(a, b, operacao): Esta é uma função chamada calcular que aceita três parâmetros: a, b e operacao. Ela realiza uma operação matemática com os valores a e b, utilizando a função operacao, e retorna o resultado.

function somar(x, y): Aqui, temos uma função chamada somar que aceita dois parâmetros, x e y, e retorna a soma desses valores.

console.log(calcular(3, 5, somar)): Aqui, a função calcular é chamada com os valores 3 e 5 como os parâmetros a e b, e a função somar é passada como a operação a ser realizada. Isso imprimirá no console "Realizando uma operação" e, em seguida, "Realizando uma soma" (graças à função somar), seguido pelo resultado da soma, que é 8. Portanto, o resultado final será 8.

console.log(calcular(8, 4, function(x, y) { ... })): Neste caso, a função calcular é chamada com os valores 8 e 4 como os parâmetros a e b. Em vez de passar a função somar como operação, uma função anônima é definida diretamente como a operação. Esta função anônima realiza uma subtração e imprime "Realizando uma subtração". O resultado da subtração é 4, e isso é o que será retornado e impresso no console.

function exibirElemento(elemento, indice, array): Esta é uma função chamada exibirElemento que aceita três parâmetros: elemento, indice e array. Ela imprime no console um objeto contendo informações sobre o elemento, o índice e o array.

const lista = ["Maça", "Banana", "Laranja", "Limão"]: Aqui, uma lista de frutas é criada como um array.

Loop for para chamar a função exibirElemento: Um loop for é usado para iterar através do array lista, chamando a função exibirElemento para cada elemento da lista. Isso imprimirá informações sobre cada elemento no console, incluindo o índice, o elemento e o array.

lista.forEach(exibirElemento): A função exibirElemento é chamada para cada elemento da lista usando o método forEach(). Isso também imprimirá informações sobre cada elemento no console.

lista.forEach(function(elemento, indice, array) { ... }): Uma função anônima é passada como argumento para o método forEach(), que faz a mesma coisa que a função exibirElemento. Ela imprime informações sobre cada elemento, índice e array no console.

Resumindo, o código realiza operações matemáticas com funções, imprime informações sobre elementos de uma lista e demonstra o uso de funções anônimas com o método forEach().
 */