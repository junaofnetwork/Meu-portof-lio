// js/app.js
import { GastoManager } from './classes.js';
import { formatCurrency } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    const gastoManager = new GastoManager();
    const formGasto = document.querySelector('form');
    const resultadosContainer = document.querySelector('.resultados-gastos');

    formGasto.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const valor = parseFloat(formGasto.querySelector('input[name="valor"]').value);
        const categoria = formGasto.querySelector('#categoria').value;

        if (valor && categoria) {
            gastoManager.adicionarGasto(valor, categoria);
            atualizarResultados(resultadosContainer, gastoManager);
            formGasto.reset();
        }
    });
});

function atualizarResultados(container, gastoManager) {
    const gastos = gastoManager.getGastos();
    const categorias = ['alimentacao', 'transporte', 'lazer', 'saude', 'outros'];

    categorias.forEach(categoria => {
        const total = gastoManager.calcularTotalPorCategoria(categoria);
        const elemento = container.querySelector(`#${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`);
        elemento.textContent = `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${formatCurrency(total)}`;
    });
}