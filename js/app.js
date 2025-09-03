import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { obterElemento, formataMoeda, limparCampos, validarValor } from "./utils.js";

const lista = new ListaGastosPorCategoria(
    new Categoria("alimentacao", "Alimentação"),
    new Categoria("transporte", "Transporte"),
    new Categoria("lazer", "Lazer"),
    new Categoria("saude", "Saúde"),
    new Categoria("outros", "Outros"),
    new Categoria("total", "Total")
);

const formulario = obterElemento("gastos-form");

function atualizarInterface() {
    lista.getCategorias().forEach(categoria => {
        const el = obterElemento(categoria.id);
        if (el) el.textContent = `${categoria.nome}: ${formataMoeda(categoria.valor)}`;
    });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorEl = obterElemento("valor");
    const categoriaEl = obterElemento("categoria");

    const valor = valorEl ? valorEl.value : "";
    const categoriaId = categoriaEl ? categoriaEl.value : "";

    if (!validarValor(valor)) {
        alert("Por favor, informe um valor válido e maior que zero.");
        return;
    }

    const categoria = lista.obterCategoriaPorNome(categoriaId);
    if (!categoria) {
        alert("Categoria inválida.");
        return;
    }

    categoria.adicionarValor(Number(valor));
    const total = lista.obterCategoriaPorNome("total");
    if (total) total.adicionarValor(Number(valor));

    atualizarInterface();
    limparCampos("valor");
});

// inicializa interface com zeros formatados
atualizarInterface();
