import React from 'react';
// import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Router, Route, browserHistory } from 'react-router';
// // Authenicate HOC
// import authenticate from './hoc/authenticate';
// import translationWrapper from './hoc/translation';

// // Layouts
// import BlankLayout from '../layouts/BlankLayout';
// import MainLayout from '../layouts/MainLayout';

// Modules
import Admin from './components/admin';
import Login from './components/login';

// const PrivateRoute = translationWrapper(authenticate(true)(MainLayout));
// const LoginRoute = translationWrapper(authenticate(false)(BlankLayout));

export default () => (
    <Router history={browserHistory}>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={() => (<div>No page found</div>)} />
        {/* <LoginRoute path="/auth" component={Auth} /> */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        {/* <Redirect to="/auth/login" /> */}
    </Router>
);
