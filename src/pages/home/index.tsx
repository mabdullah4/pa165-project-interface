import * as React from "react";
import { Container } from "react-bootstrap";
import { Switch, RouteProps, Route, Redirect, useRouteMatch } from "react-router-dom";

import MainNavbar from "../../components/MainNavbar";
import Courts from "./Courts";
import Events from "./Events";
import Home from "./Home";
import Users from "./Users";

export interface MainProps {}

interface IProtectedRouteProps extends RouteProps {
    isLoggedIn: boolean;
    component: any;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />)} />
    );
};

const Main: React.FC<MainProps> = () => {
    const { path } = useRouteMatch();

    return (
        <React.Fragment>
            <MainNavbar />
            <Container className="mt-4">
                <Switch>
                    <Route path={`${path}events/:courtId`} component={Events} />
                    <Route path={`${path}courts/add`} component={Courts} />
                    <Route path={`${path}courts`} component={Courts} />
                    <Route path={`${path}users/add`} component={Users} />
                    <Route path={`${path}users`} component={Users} />
                    <Route path={path} component={Home} />
                </Switch>
            </Container>
        </React.Fragment>
    );
};

export default Main;
