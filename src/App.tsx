import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/auth";
import Main, { ProtectedRoute } from "./pages/home/index";
import { IAppState } from "./store/rootReducer";

export interface IAppProps {
    isLoggedIn: boolean;
}

const App: React.FC<IAppProps> = ({ isLoggedIn }) => (
    <div>
        <Switch>
            <Route path="/pa165/auth" component={Auth} />
            <ProtectedRoute path="/pa165" component={Main} isLoggedIn={isLoggedIn} />
            <Redirect exact from="/" to="/pa165" />
        </Switch>
    </div>
);

const mapStateToProps = ({ auth }: IAppState) => ({
    isLoggedIn: auth.isLoggedIn,
});

export default connect(mapStateToProps)(App);
