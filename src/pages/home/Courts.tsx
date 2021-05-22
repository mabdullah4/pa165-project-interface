import * as React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import TableWrapper from "../../components/TableWrapper";

export interface CourtsProps {}

const Courts: React.FC<CourtsProps> = () => {
    return (
        <TableWrapper title="Courts" addLink="/courts/add" addText="Add Courts">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Tournament Court</td>
                    <td>Tournament Grass Court</td>
                    <td>Grass</td>
                    <td className="text-right">
                        <Button size="sm" className="mr-1" to="/events/1" as={Link} variant="warning">
                            Events
                        </Button>
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

export default Courts;
