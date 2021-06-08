import * as React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import isManager from "../helper/isManager";
import { IUser } from "../store/auth";

import { SetLogout } from "../store/auth/actions";
import { IAppState } from "../store/rootReducer";

export interface MainNavbarProps {
    onLogout: typeof SetLogout;
    user?: IUser;
}

const MainNavbar: React.FC<MainNavbarProps> = ({ user, ...props }) => {
    const onLogout = () => props.onLogout(undefined);

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/pa165/">
                    Tennis Court Manager
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={NavLink} exact activeClassName="active" to="/pa165/">
                            Home
                        </Nav.Link>
                        {isManager(user) ? (
                            <React.Fragment>
                                <Nav.Link as={NavLink} activeClassName="active" to="/pa165/users">
                                    Users
                                </Nav.Link>
                            </React.Fragment>
                        ) : null}

                        <Nav.Link as={NavLink} activeClassName="active" to="/pa165/courts">
                            Courts
                        </Nav.Link>

                        {/* <Nav.Link as={NavLink} activeClassName="active" to="/pa165/profile">
                            Profile
                        </Nav.Link> */}

                        <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const mapStateToProps = ({ auth }: IAppState) => ({
    user: auth.user,
});

export default connect(mapStateToProps, { onLogout: SetLogout })(MainNavbar);
