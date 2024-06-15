
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


//Map
//const nomes = []

//for(let i = 0 ; i < personagens.length; i++){
 //  nomes.push(personagens[i].nome)
//}

//console.log(nomes)

const nomes = personagens.map(function(personagem){
  return personagem.raca
})

console.log(nomes)


//Filter

//const orcs = []

//for(let i = 0; i < personagens.length; i++){
 // if(personagens[i].raca==="Orc"){
 //  orc.push(personagens[i].raca)
 // }
//}

const orcs = personagens.filter(function(personagem){
  return personagem.raca === "Orc"
})
console.log(orcs)



//Reduce
//const valorTotal = personagens.reduce(function(valorAcumalado, personagem){
//  return valorAcumalado + personagem.nivel
//},0)
//console.log(valorTotal)


const racas = personagens.reduce(function(valorAcumalado,personagem){
   if(valorAcumalado[personagem.raca]){
    valorAcumalado[personagem.raca].push(personagem)
   }else{
    valorAcumalado[personagem.raca] = [personagem]
   }
   return valorAcumalado
},{})
console.log(racas)

//Sort

const personagensOrdenados = personagens.slice().sort(function(a,b){
  return a.nivel - b.nivel
})

console.log(personagens)
console.log(personagensOrdenados)









