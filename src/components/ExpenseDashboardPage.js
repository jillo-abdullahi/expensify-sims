import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
    <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Dashboard</h1>
          </div>
        </div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


export default ExpenseDashboardPage;