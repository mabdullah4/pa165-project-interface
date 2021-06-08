import * as React from "react";
import { Container } from "react-bootstrap";
import { Switch, RouteProps, Route, Redirect, useRouteMatch } from "react-router-dom";

import MainNavbar from "../../components/MainNavbar";
import Courts from "./Courts";
import AddCourts from "./AddCourt";
import UpdateCourt from "./UpdateCourt";
import Events from "./Events";
import Home from "./Home";
import Participants from "./Participants";
import Users from "./Users";
import UpdateUser from "./UpdateUser";
import AddEvent from "./AddEvent";
import AddParticipant from "./AddParticipant";
import { IUser } from "../../store/auth";
import { connect } from "react-redux";
import { IAppState } from "../../store/rootReducer";

export interface MainProps {
    user?: IUser;
}

interface IProtectedRouteProps extends RouteProps {
    isLoggedIn: boolean;
    component: any;
}

interface IManagerRouteProps extends RouteProps {
    user?: IUser;
    component: any;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/pa165/auth/login" />)}
        />
    );
};

export const ManagerRoute: React.FC<IManagerRouteProps> = ({ user, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                user?.type === "MANAGER" ? <Component {...props} /> : <Redirect to="/pa165/auth/login" />
            }
        />
    );
};

const Main: React.FC<MainProps> = ({ user }) => {
    const { path } = useRouteMatch();

    console.log(`${path}participants`);
    

    return (
        <React.Fragment>
            <MainNavbar />
            <Container className="mt-4">
                <Switch>
                    <Route path={`${path}/participants/:eventId/add`} component={AddParticipant} />
                    <Route path={`${path}/participants/:eventId`} component={Participants} />
                    <Route path={`${path}/events/add`} component={AddEvent} />
                    <Route path={`${path}/events/:courtId`} component={Events} />
                    <ManagerRoute user={user} path={`${path}/courts/add`} component={AddCourts} />
                    <ManagerRoute user={user} path={`${path}/court/update/:courtId`} component={UpdateCourt} />
                    <Route path={`${path}/courts`} component={Courts} />
                    <ManagerRoute user={user} path={`${path}/users/add`} component={Users} />
                    <ManagerRoute user={user} path={`${path}/users`} component={Users} />
                    <ManagerRoute user={user} path={`${path}/user/update/:userId`} component={UpdateUser} />
                    <Route path={path} component={Home} />
                </Switch>
            </Container>
        </React.Fragment>
    );
};

const mapStateToProps = ({ auth }: IAppState) => ({
    user: auth.user,
});

export default connect(mapStateToProps)(Main);
