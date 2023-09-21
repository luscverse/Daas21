// Função para calcular a pontuação final de cada subescala
function calcularPontuacaoSubescala(subescala) {
    let pontuacao = 0;

    for (let i = 1; i <= 7; i++) {
        const pergunta = document.getElementById(`pergunta${i + subescala}`);
        pontuacao += parseInt(pergunta.value);
    }

    return pontuacao * 2;
}

// Função para classificar os sintomas
function classificarSintomas(estresse, ansiedade, depressao) {
    const classificacao = {
        estresse: "",
        ansiedade: "",
        depressao: "",
    };

    if (estresse >= 0 && estresse <= 10) {
        classificacao.estresse = "Normal. Nada sério por enquanto! Por hora você pode ler um pouco mais sobre o estresse.";
    } else if (estresse <= 18) {
        classificacao.estresse = "Leve";
    } else if (estresse <= 26) {
        classificacao.estresse = "Moderado";
    } else if (estresse <= 34) {
        classificacao.estresse = "Severo";
    } else {
        classificacao.estresse = "Extremamente Severo";
    }

    if (ansiedade >= 0 && ansiedade <= 6) {
        classificacao.ansiedade = "Normal";
    } else if (ansiedade <= 9) {
        classificacao.ansiedade = "Leve";
    } else if (ansiedade <= 14) {
        classificacao.ansiedade = "Moderado";
    } else if (ansiedade <= 19) {
        classificacao.ansiedade = "Severo. Fique atento! Este grau de severidade requer apoio de um profissional. Recomendamos que você busque um psicólogo ou psiquiatra para diagnóstico adequado.";
    } else {
        classificacao.ansiedade = "Extremamente Severo";
    }

    if (depressao >= 0 && depressao <= 9) {
        classificacao.depressao = "Normal";
    } else if (depressao <= 12) {
        classificacao.depressao = "Leve";
    } else if (depressao <= 20) {
        classificacao.depressao = "Moderado. Sinal amarelo! É bom entender melhor se é fruto da situação ou algo mais grave Fale com seu psicólogo. ";
    } else if (depressao <= 27) {
        classificacao.depressao = "Severo";
    } else {
        classificacao.depressao = "Extremamente Severo";
    }

    return classificacao;
}

// Função principal que é chamada quando o formulário é enviado
function calcularResultado() {
    const pontuacaoEstresse = calcularPontuacaoSubescala(1);
    const pontuacaoAnsiedade = calcularPontuacaoSubescala(2);
    const pontuacaoDepressao = calcularPontuacaoSubescala(3);

    const classificacaoSintomas = classificarSintomas(
        pontuacaoEstresse,
        pontuacaoAnsiedade,
        pontuacaoDepressao
    );

    const resultadoDaas = document.querySelector('.resultadoDaas');
    resultadoDaas.innerHTML = `
        Pontuação de Estresse: ${pontuacaoEstresse} (${classificacaoSintomas.estresse})<br><br>
        Pontuação de Ansiedade: ${pontuacaoAnsiedade} (${classificacaoSintomas.ansiedade})<br><br>
        Pontuação de Depressão: ${pontuacaoDepressao} (${classificacaoSintomas.depressao})
    `;
}

// Adiciona um ouvinte de evento para o envio do formulário
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    calcularResultado(); // Chama a função de cálculo
});

