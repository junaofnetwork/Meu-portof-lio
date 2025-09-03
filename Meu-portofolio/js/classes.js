class Expense {
    constructor(name, value, category) {
        this.name = name;
        this.value = value;
        this.category = category;
    }
}

class ExpenseManager {
    constructor() {
        this.expenses = [];
    }

    addExpense(expense) {
        this.expenses.push(expense);
    }

    removeExpense(expenseName) {
        this.expenses = this.expenses.filter(expense => expense.name !== expenseName);
    }

    calculateTotal() {
        return this.expenses.reduce((total, expense) => total + expense.value, 0);
    }

    getExpensesByCategory(category) {
        return this.expenses.filter(expense => expense.category === category);
    }

    getAllExpenses() {
        return this.expenses;
    }
}