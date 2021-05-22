import * as React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import TableWrapper from "../../components/TableWrapper";

export interface AddEventProps {}

const AddEvent: React.FC<AddEventProps> = () => {
    return (
        <TableWrapper title="Events" addLink="/events/add" addText="Add Events">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Kids Tournament</td>
                    <td>Kids Tournament for charity</td>
                    <td>Tournament</td>
                    <td>12/12/2021</td>
                    <td>10:15 am - 02:30 pm</td>
                    <td className="text-right">
                        <Button as={Link} to="/participants" size="sm" className="mr-1" variant="warning">
                            Participants
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

export default AddEvent;
