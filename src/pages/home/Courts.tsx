import * as React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import TableWrapper from "../../components/TableWrapper";
import isManager from "../../helper/isManager";
import courtService from "../../service/court";
import { IUser } from "../../store/auth";
import { IAppState } from "../../store/rootReducer";
import { IEvent } from "./Events";

export interface ICourt {
    id: number;
    name: string;
    location: string;
    type: string;
    isAvailable: boolean;
    events: IEvent;
}

export interface CourtsProps {
    user?: IUser;
}

const Courts: React.FC<CourtsProps> = ({ user }) => {
    const [courts, setCourts] = React.useState<ICourt[]>([]);
    const { push } = useHistory();
    React.useEffect(() => {
        courtService
            .fetch<ICourt[]>()
            .then((response) => {
                setCourts(response.data);
            })
            .catch(console.error);
    }, []);

    const deleteCourt = (courtId: number) => {
        courtService
            .delete(courtId)
            .then(() => setCourts(courts.filter((court) => court.id !== courtId)))
            .catch(console.error);
    };

    return (
        <TableWrapper title="Courts" addLink={isManager(user) ? "/pa165/courts/add" : undefined} addText="Add Courts">
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
                        <td>{court.isAvailable ? "Yes" : "No"}</td>
                        <td className="text-right">
                            <Button
                                size="sm"
                                className="mr-1"
                                to={`/pa165/events/${court.id}`}
                                as={Link}
                                variant="warning"
                            >
                                Events
                            </Button>
                            {/* <Button size="sm" className="mr-1" to={`/court/update/${court.id}`} as={Link} variant="primary">
                                Edit
                            </Button> */}
                            <Button size="sm" variant="danger" onClick={() => deleteCourt(court.id)}>
                                Delete
                            </Button>
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

export default connect(mapStateToProps)(Courts);
