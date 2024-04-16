// Inicializa a variável 'velocidade' com o valor 0
let velocidade = 0;

// Executa um loop do-while, garantindo que o bloco seja executado pelo menos uma vez
do {
    // Exibe a velocidade atual do veículo em um alerta
    alert("A velocidade do veículo é " + velocidade + " km/h");

    // Reduz a velocidade do veículo em 20 km/h a cada iteração
    velocidade -= 20;

// O loop continua enquanto a velocidade for maior que 0
} while (velocidade > 0);

// Exibe um alerta indicando a velocidade final após o loop do-while
alert("Velocidade final: " + velocidade + " km/h");
