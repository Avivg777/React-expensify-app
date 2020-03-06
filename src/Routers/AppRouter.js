import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardComponent from '../Components/ExpenseDashboard/ExpenseDashboard';
import AddExpensePage from '../Components/AddExpensePage/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage/EditExpensePage';
import HelpPage from '../Components/HelpPage/HelpPage';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';
import Header from '../Components/Header/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardComponent} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;