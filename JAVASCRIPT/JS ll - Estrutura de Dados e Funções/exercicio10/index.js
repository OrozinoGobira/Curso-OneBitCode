// Array que armazena as vagas disponíveis
const vagas = []

// Função para listar as vagas disponíveis
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice) {
    // Formato de exibição: 1. nome (x candidatos)
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += "(" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal 
  }, "")
  alert(vagasEmTexto)
}

// Função para criar uma nova vaga
function novaVaga() {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")

    // Confirmação dos detalhes da nova vaga
    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData Limite: " + dataLimite
    )
    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada")
    }
}

// Função para exibir os detalhes de uma vaga
function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    // Formatação dos candidatos inscritos
    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")
    
    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

// Função para inscrever um candidato em uma vaga
function inscreverCandidato() {
    const candidato = prompt("Informe o nome do (a) candidato(a): ")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever: ")
    const vaga = vagas[indice]

    // Confirmação da inscrição do candidato na vaga
    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

// Função para excluir uma vaga
function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    // Confirmação da exclusão da vaga
    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?"+
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

// Função para exibir o menu de opções
function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )
    return opcao
}
// Função principal que executa o programa
function executar() {
    let opcao = ""

    // Loop do-while para exibir o menu até que o usuário escolha a opção "6" (Sair)
    do {
        // Obtém a opção do menu
        opcao = exibirMenu()

        // Executa a ação correspondente à opção escolhida
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
                alert("Saindo....")
                // Não esqueça do break aqui para evitar a execução da próxima opção (default)
                break
            default:
                alert("Opção inválida...")
        }

    } while (opcao !== "6") // Continua o loop enquanto a opção não for "6"
}

// Chama a função executar para iniciar o programa
executar()
