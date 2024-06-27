function dividir(num){
    console.log(num)
    if(num % 2 === 0){
        dividir(num / 2)
    }else{
        return num
    }
}

//dividir(256)


function dobrar(num){
 console.log(num)
 dobrar (num * 2)
}

//dobrar(1)

function fatorial(num){
    console.log("Numero: " + num)
    if(num === 1){
        return 1
    } else if( num === 0){
        return 1
    }else{
        console.log(num + "* !" + (num - 1))
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))




















/*function dividir(num) {
    // Exibe o número atual no console.
    console.log(num);

    // Verifica se o número é par (divisível por 2).
    if (num % 2 === 0) {
        // Se for par, chama a função "dividir" recursivamente com o novo valor.
        dividir(num / 2);
    } else {
        // Se o número se tornar ímpar, retorna o valor.
        return num;
    }
}

// Chama a função "dividir" com o valor inicial de 100.
//dividir(100);

function dobrar(num){
    console.log(num)
    dobrar(num * 2)
}
//dobrar()

//fatorial de 5: 5 * 4 * 3 * 2 * 1
function fatorial(num) {
    console.log("Numero: " + num); // Imprime o número atual no console.

    if (num === 0) { // Verifica se o número é igual a 0.
        return 1; // Retorna 1, pois o fatorial de 0 é 1 por definição.
    } else if (num === 1) { // Verifica se o número é igual a 1.
        return 1; // Retorna 1, pois o fatorial de 1 é 1 por definição.
    } else {
        console.log(num + "*! " + (num - 1)); // Imprime uma mensagem indicando a operação de fatorial.

        // Realiza uma chamada recursiva à função fatorial com num - 1 e multiplica o resultado por num.
        return num * fatorial(num - 1);
    }
}

console.log(fatorial(5)); // Chama a função fatorial com o argumento 5 e imprime o resultado.




/*

function fatorial(num) {: Isso define a função fatorial com um argumento num que representa o número para o qual queremos calcular o fatorial.

console.log("Numero: " + num);: Esta linha imprime o valor do número atual no console, o que ajuda a rastrear o processo de cálculo do fatorial.

if (num === 0) {: Este bloco verifica se num é igual a 0, caso em que o fatorial é definido como 1 por convenção. Portanto, a função retorna 1.

else if (num === 1) {: Aqui, verificamos se num é igual a 1, e novamente retornamos 1, já que o fatorial de 1 é 1.

console.log(num + "*! " + (num - 1));: Esta linha imprime uma mensagem que indica a operação de fatorial em andamento.

return num * fatorial(num - 1);: Aqui, a função realiza uma chamada recursiva a si mesma com num - 1 e multiplica o resultado pelo valor original num. Isso permite calcular o fatorial de forma recursiva, reduzindo o número a cada chamada até que o caso base seja alcançado.

console.log(fatorial(5));: Finalmente, a função é chamada com o argumento 5, e o resultado é impresso no console.

O código calcula o fatorial de 5 e exibe as etapas do cálculo no console, produzindo o valor correto do fatorial de 5, que é 120.

*/

