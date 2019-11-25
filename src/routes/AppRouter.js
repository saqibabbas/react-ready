import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../containers/DashboardPage';
import Customer from '../containers/CustomerPage';
import Product from '../containers/ProductPage';
import Home from '../containers/HomePage';
import Login from '../containers/LoginPage';
import { AdminLayout, HomeLayout } from '../layouts';

const AppRouter = () => (
    <Switch>
        <PublicRoute path="/login" component={Login} layout={HomeLayout} />
        <PrivateRoute path="/dashboard" component={Dashboard} layout={AdminLayout} />
        <PrivateRoute path="/customers" component={Customer} layout={AdminLayout} />
        <PrivateRoute path="/products" component={Product} layout={AdminLayout} />
        <PublicRoute exact path="/" component={Home} layout={HomeLayout} />
    </Switch>
);

export default AppRouter;

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <AppRouteLayout {...rest} component={Component} layout={Layout} />
);

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => (
    localStorage.getItem('authToken') ?
        <AppRouteLayout {...rest} component={Component} layout={Layout} />
        :
        <Redirect
            to={{
                pathname: '/login',
                state: { from: rest.location }
            }}
        />

);

const AppRouteLayout = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (Layout) {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            } else {
                return <Component {...props} />
            }
        }}
    />
)