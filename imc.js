function calcularIMC() {
    // 1. Entrada de dados: Pega os valores dos campos de texto
    const pesoString = document.getElementById("pesos").value;
    const alturaString = document.getElementById("altura").value;

    // 2. Converte os valores de texto para números
    const peso = parseFloat(pesoString);
    const altura = parseFloat(alturaString);

    const resultadoElemento = document.getElementById("resultado");

    // 3. Validação: Garante que os valores são números válidos e positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoElemento.textContent = "Por favor, insira valores numéricos válidos e positivos para peso и altura.";
        return; // Para a execução da função
    }

    // 4. Processamento: Calcula o IMC
    // A fórmula é peso / (altura * altura)
    const imc = peso / (altura * altura);

    // 5. Classificação do IMC (opcional, mas útil)
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade Grau I';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III (Mórbida)';
    }

    // 6. Saída de dados: Mostra o resultado formatado na tela
    resultadoElemento.textContent = `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
}