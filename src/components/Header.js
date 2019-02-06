import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => (
    <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Expensify</h1>
        </Link>
        <Link to="/create"><button className="button button--link">Add Expense</button></Link>
        <Link to="/help"><button className="button button--link">Help</button></Link>
      </div>
    </div>
  </header>
);

export default Header;