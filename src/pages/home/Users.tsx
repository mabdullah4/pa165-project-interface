import * as React from "react";
import { Button } from "react-bootstrap";

import TableWrapper from "../../components/TableWrapper";

export interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
    return (
        <TableWrapper title="Users" addLink="/users/add" addText="Add Users">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ahmad</td>
                    <td>ahmad@example.com</td>
                    <td className="text-right">
                        <Button size="sm" className="mr-1" variant="primary">
                            Edit
                        </Button>
                        <Button size="sm" variant="danger">
                            Delete
                        </Button>
                    </td>
                </tr>
            </tbody>
        </TableWrapper>
    );
};

export default Users;
