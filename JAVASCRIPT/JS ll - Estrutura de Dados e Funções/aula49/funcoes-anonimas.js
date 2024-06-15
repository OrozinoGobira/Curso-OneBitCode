const names = ["Daniel", "Maria", "Marta", "Juca","João", "Jessica"]

 // o que eu espero?
// namesCount = {d:1, m:2, j:3}



const namesCount = names.reduce(function(count, namesAtual){
    const firstletter = namesAtual[0].toLocaleLowerCase()
    if(count[firstletter]){
        count[firstletter]++
    }else{
        count[firstletter] = 1
    }
    return count
},{})
console.log(namesCount)


















/*const itens = [
    {description: 'pen', quantity: 1, price: 3},
    {description: 'rule', quantity: 2, price: 5},
    {description: 'erase',quantity: 2, price: 6}
]


//o que eu espero? 25

const total = itens.reduce ((soma, numeroAtual) => soma + numeroAtual.price * numeroAtual.quantity, 0)

console.log(total)

*/






































/*olaMundo()


function olaMundo(){
    console.log("Olá, Mundo!")
}

const oiMundo = function(){
    console.log("Oi, mundo")
}
oiMundo()
*/


























/*function somar(a,b){
    return a + b
}


let operacao = somar

console.log(operacao(4,5))


operacao = function(a,b){
    return a - b
}

console.log(operacao(4,5))*/