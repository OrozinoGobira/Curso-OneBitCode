let olderPersonName = prompt ("Digite o nome da pessoa mais velha: ")
let olderPersonAge = prompt ("Digite a idade da pessoa mais nova ")

let youngPersonName = prompt ("Digite o nome da pessoa mais nova: ")
let youngPersonAge = prompt ("Digite a idade da pessoa mais nova")

let ageDifeference = olderPersonAge - youngPersonAge

alert(
    "Pessoa mais velha "+ olderPersonName + " \nIdade: "+ olderPersonAge +" anos"+
    "\nPessoa mais nova "+ youngPersonName + "\n Idade: "+ youngPersonAge +" anos" +
    "\nDiferença de idade: " + ageDifeference
)
