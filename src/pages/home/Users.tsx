import * as React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import TableWrapper from "../../components/TableWrapper";
import userService from "../../service/user";
import { IUser } from "../../store/auth";
import { IAppState } from "../../store/rootReducer";

export interface UsersProps {
    user?: IUser;
}

const Users: React.FC<UsersProps> = ({ user: loggedInUser }) => {
    const [users, setUsers] = React.useState<IUser[]>([]);

    React.useEffect(() => {
        userService
            .all<IUser[]>()
            .then((response) => {
                setUsers(response.data);
            })
            .catch(console.error);
    }, []);

    const deleteUser = (userId: number) => () => {
        userService
            .delete(userId)
            .then(() => {
                setUsers(users.filter((user) => user.id !== userId));
            })
            .catch(console.error);
    };
    return (
        <TableWrapper title="Users">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className="text-right">
                            <Button
                                size="sm"
                                className="mr-1"
                                to={`/pa165/user/update/${user.id}`}
                                as={Link}
                                variant="primary"
                            >
                                Edit
                            </Button>
                            {loggedInUser?.type === "MANAGER" ? (
                                <Button size="sm" variant="danger" onClick={deleteUser(user.id)}>
                                    Delete
                                </Button>
                            ) : null}
                        </td>
                    </tr>
                ))}
            </tbody>
        </TableWrapper>
    );
};

const mapStateToProps = ({ auth }: IAppState) => ({
    user: auth.user,
});

export default connect(mapStateToProps)(Users);
