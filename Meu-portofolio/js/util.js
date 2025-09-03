// util.js
export function formatCurrency(value) {
    return `R$${value.toFixed(2).replace('.', ',')}`;
}

export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export function calculateTotal(expenses) {
    return expenses.reduce((total, expense) => total + expense.value, 0);
}

export function findExpenseByCategory(expenses, category) {
    return expenses.filter(expense => expense.category === category);
}

export function clearForm(form) {
    form.reset();
}