import React from 'react';
import ConnectedExpenseList from '../ExpenseList/ExpenseList';
import ExpenseListFilters from '../ExpenseListFilters/ExpenseListFilters';

const ExpenseDashboardComponent = () => (
    <div>
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);

export default ExpenseDashboardComponent;