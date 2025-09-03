export const obterElemento = (id) => document.getElementById(id);

export const formataMoeda = (valor) => {
    const n = Number(valor) || 0;
    return `R$ ${n.toFixed(2).replace(".", ",")}`;
};

export const limparCampos = (...ids) => {
    ids.forEach(id => {
        const el = obterElemento(id);
        if (el) el.value = "";
    });
};

export const validarValor = (valor) => {
    const n = Number(valor);
    return Number.isFinite(n) && n > 0;
};