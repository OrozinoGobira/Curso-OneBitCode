// Solicita ao usuário que insira uma medida em metros
const medida = parseFloat(prompt("Insira uma medida em metros"));

// Solicita ao usuário que escolha uma unidade de medida para conversão
const unidade = parseFloat(prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1. milímetros (mm)" +
    "\n2. centímetros (cm)" +
    "\n3. decímetros (dm)" +
    "\n4. decâmetros (dam)" +
    "\n5. hectômetros (hm)" +
    "\n6. quilômetros (km)"
));

// Usa um switch para realizar a conversão com base na escolha do usuário
switch (unidade) {
    case 1:
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
        break;
    case 2:
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
        break;
    case 3:
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
        break;
    case 4:
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
        break;
    case 5:
        alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
        break;
    case 6:
        alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
        break;
    default:
        alert("Opção inválida");
}