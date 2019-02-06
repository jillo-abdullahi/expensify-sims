import React from 'react';

const HelpPage = () => (
    <div>
    <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Expensify is an app that helps track your expenses.</h1>
          </div>
        </div>
        <div className="content-container">
            <div>
            <ol className="help-list">
                <li><span className="list-number">1.</span><p>Click on <i>Add Expense</i> above to add a new expense.</p></li>
                <li><span className="list-number"> 2.</span><p>View your added expenses on the <i>Dashboard</i> after adding an expense.</p></li>
                <li><span className="list-number">3.</span><p>You can filter your expenses using date or amount from the dashboard.</p></li>
            </ol>
        </div>
        </div>
    </div>
);

export default HelpPage;