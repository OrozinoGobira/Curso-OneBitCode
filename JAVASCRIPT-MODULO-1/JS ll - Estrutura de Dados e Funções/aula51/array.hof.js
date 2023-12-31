const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map


//const nomes = []
//for(let i = 0; i < personagens.length; i++){
 //  nomes.push(personagens[i].nome)
//}
//console.log(nomes)


//const nomes = personagens.map(function(personagem){
//  return personagem.nome
//})
//console.log(nomes)


//Filter


 //const orcs = []

//for(let i = 0; i < personagens.length; i++){
 // if(personagens[i].raca=== "Orc"){
   // orcs.push(personagens[i])
 // }
//}

const orcs = personagens.filter(function(personagem){
  return personagem.raca === "Orc"
})

console.log(orcs)

//Reduce

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
  return valorAcumulado + personagem.nivel 
},0)
console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumalado, personagem){
  if(valorAcumalado[personagem.raca]){
    valorAcumalado[personagem.raca].push(personagem)
  }else{
    valorAcumalado[personagem.raca] = [personagem]
  }
  return valorAcumalado
}, {})

console.log(racas)


//sort

// 1, 2, 4, 7, 3, 0

personagens.sort(function(a,b){
  return a.nivel - b.nivel 
})
console.log(personagens)
/*
Map: Cria um novo array contendo apenas os nomes dos personagens.
Filter: Cria um novo array contendo apenas os personagens da raça "Orc".
Reduce (nivelTotal): Calcula a soma total dos níveis de todos os personagens.
Reduce (racas): Organiza os personagens em um objeto, agrupados por raça.
Sort: Ordena os personagens com base no nível, em ordem crescente.
*/