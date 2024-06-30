// Array para armazenar as vagas de emprego
const vagas = []

// Função para listar todas as vagas
function listarVagas() {
    // Utiliza reduce para criar uma string com todas as vagas
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        // Adiciona o índice, nome da vaga e número de candidatos
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += "(" + vaga.candidatos.length + " candidatos)"
        return textoFinal
    }, "")
    // Mostra a string com todas as vagas em um alerta
    alert(vagasEmTexto)
}

// Função para criar uma nova vaga
function novaVaga() {
    // Solicita as informações da nova vaga ao usuário
    const nome = prompt("Informe o nome para a vaga")
    const descricao = prompt("Informe a descrição para a vaga")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga")
    
    // Confirmação do usuário para criar a vaga
    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData Limite: " + dataLimite
    )
    
    // Se o usuário confirmar, cria a nova vaga e adiciona à lista de vagas
    if (confirmacao) {
        const novaVaga = {
            nome,
            descricao,
            dataLimite,
            candidatos: [] // Inicia com uma lista vazia de candidatos
        }
        vagas.push(novaVaga) // Adiciona a nova vaga à lista de vagas
        alert("Vaga criada") // Informa que a vaga foi criada
    }
}

// Função para exibir uma vaga específica
function exibirVaga() {
    // Solicita o índice da vaga ao usuário
    const indice = prompt("Informe o índice da vaga que deseja exibir")
    
    // Verifica se o índice é válido
    if (indice >= vagas.length || indice < 0) {
        alert("Índice inválido") // Mostra um alerta se o índice for inválido
        return // Sai da função
    }

    // Recupera a vaga da lista de vagas
    const vaga = vagas[indice]

    // Cria uma string com todos os candidatos da vaga
    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato // Adiciona cada candidato em uma nova linha
    }, "")

    // Mostra os detalhes da vaga em um alerta
    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

// Função para inscrever um candidato em uma vaga
function inscreverCandidato() {
    // Solicita o nome do candidato e o índice da vaga
    const candidato = prompt("Informe nome do(a) candidato(a): ")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato deseja se inscrever: ")
    
    // Recupera a vaga da lista de vagas
    const vaga = vagas[indice]

    // Confirmação do usuário para inscrever o candidato na vaga
    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )
    
    // Se o usuário confirmar, inscreve o candidato na vaga
    if (confirmacao) {
        vaga.candidatos.push(candidato) // Adiciona o candidato à lista de candidatos da vaga
        alert("Inscrição realizada") // Informa que a inscrição foi realizada
    }
}

// Função para excluir uma vaga
function excluirVaga() {
    // Solicita o índice da vaga ao usuário
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    
    // Recupera a vaga da lista de vagas
    const vaga = vagas[indice]

    // Confirmação do usuário para excluir a vaga
    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )
    
    // Se o usuário confirmar, exclui a vaga
    if (confirmacao) {
        vagas.splice(indice, 1) // Remove a vaga da lista de vagas
        alert("Vaga excluída") // Informa que a vaga foi excluída
    }
}

// Função para exibir o menu de opções
function exibirMenu() {
    // Solicita ao usuário que escolha uma das opções
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar Vagas disponíveis" +
        "\n2. Criar nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )
    return opcao // Retorna a opção escolhida pelo usuário
}

// Função principal para executar o programa
function executar() {
    let opcao = ""
    
    // Loop para continuar exibindo o menu até que o usuário escolha sair
    do {
        opcao = exibirMenu() // Exibe o menu e armazena a opção escolhida pelo usuário

        // Verifica a opção escolhida e executa a função correspondente
        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...") // Informa que o programa está encerrando
                break
            default:
                alert("Opção inválida") // Informa que a opção escolhida é inválida
        }
    } while (opcao !== "6") // Continua o loop enquanto a opção não for "6" (sair)
}

// Chama a função principal para executar o programa
executar()