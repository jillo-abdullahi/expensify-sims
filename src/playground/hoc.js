// Higher order component - A component (HOC) that renders another component
// To reuse code
// Render hijacking
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// HOC
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not authorised to view this page!</p>}
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
                ) : (
                    <p>You are not authorised to view this page!</p>
                    )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);






// ReactDOM.render(<AdminInfo isAdmin={true} info={'These are the details'}/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Some info" />, document.getElementById('app'));