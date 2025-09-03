class Categoria {
    #nome;
    #valor;

    constructor(nome, valor) {
        this.#nome = nome;
        this.#valor = 0;
    }
    get Valor() {
        return this.valor;
    }
    get Nome() {
        return this.nome;
    }

    adicionarValor(valor) {
        this.#valor += parseFloat(valor);
    }


}

export class Categoria {
    constructor(id, nome, valor = 0) {
        this.id = id;
        this.nome = nome;
        this.valor = Number(valor);
    }

    adicionarValor(valor) {
        this.valor += Number(valor);
    }
}

export class ListaGastosPorCategoria {
    constructor(...categorias) {
        this._categorias = categorias;
    }

    obterCategoriaPorNome(id) {
        return this._categorias.find(c => c.id === id);
    }

    obterTotal() {
        return this._categorias.reduce((total, categoria) => total + Number(categoria.valor), 0);
    }

    getCategorias() {
        return this._categorias.slice();
    }
}