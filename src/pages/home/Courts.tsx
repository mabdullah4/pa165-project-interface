import * as React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import TableWrapper from "../../components/TableWrapper";
import courtService from "../../service/court";

export interface ICourt {
    id: number;
    name: string;
    location: string;
    type: string;
    isAvailable: boolean;
}

export interface CourtsProps {}

const Courts: React.FC<CourtsProps> = () => {
    const [courts, setCourts] = React.useState<ICourt[]>([]);

    React.useEffect(() => {
        courtService.fetch<ICourt[]>().then((response) => {
            setCourts(response.data);
        });
    }, []);

    return (
        <TableWrapper title="Courts" addLink="/courts/add" addText="Add Courts">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>is Available</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {courts.map((court) => (
                    <tr key={court.id}>
                        <td>{court.id}</td>
                        <td>{court.name}</td>
                        <td>{court.type}</td>
                        <td>{court.isAvailable}</td>
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
                ))}
            </tbody>
        </TableWrapper>
    );
};

export default Courts;
