
function calcularDesconto(sãoPaulo){

    //Entrada de dados
    const valorOriginalString = document.getElementById("valor").value;
    const descontoString = document.getElementById("desconto").value;
    
    // Converter para números
    const valorOriginal = parseFloat(valorOriginalString);
    const desconto = parseFloat(descontoString);

    const resultadoElemento = document.getElementById("resultado");

    // Validação para garantir que os valores são números
    if (isNaN(valorOriginal) || isNaN(desconto)) {
        resultadoElemento.textContent = "Por favor, insira valores numéricos válidos.";
        return; // Para a execução da função
    }

    // Processamento
    const valorDesconto = (valorOriginal * desconto ) / 100;
    const valorFinal = valorOriginal - valorDesconto;
    // Saida de dados (formatado para 2 casas decimais, bom para dinheiro)
    resultadoElemento.textContent = "Valor Final: R$ " + valorFinal.toFixed(2);

}
