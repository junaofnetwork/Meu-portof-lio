function adicionarGasto() {
    const valor = parseFloat(document.getElementById("valor").value);
    const categoria = document.getElementById("categoria").value;

    if (!valor || !categoria) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const p = document.getElementById(categoria);
    p.innerText = `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$${valor.toFixed(2)}`;
}
