import * as React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import TableWrapper from "../../components/TableWrapper";
import participantService from "../../service/participant";

export interface ParticipantsProps {}

export interface IParticipant {
    id: number;
    name: string;
}

const Participants: React.FC<ParticipantsProps> = () => {
    const { id: eventId } = useParams<{ id: string }>();
    const [participants, setParticipants] = React.useState<IParticipant[]>([]);

    React.useEffect(() => {
        participantService.fetchByEvent<IParticipant[]>(parseInt(eventId)).then((response) => {
            setParticipants(response.data);
        });
    }, []);

    return (
        <TableWrapper title="Participants" addLink={`/particpants/${eventId}/add`} addText="Add Participants">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {participants.map((participant) => (
                    <tr key={participant.id}>
                        <td>{participant.id}</td>
                        <td>{participant.name}</td>
                        <td className="text-right">
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

export default Participants;
