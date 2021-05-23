import * as React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";

export interface AddParticipantProps {}

export interface IParticipantForm {
    name: string;
}

const AddParticipant: React.FC<AddParticipantProps> = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IParticipantForm>();

    const onAddParticipant = () => {};

    return (
        <Form onSubmit={handleSubmit(onAddParticipant)}>
            <Row>
                <Col xs={12} md={6}>
                    <FormInput
                        name="name"
                        error={errors.name?.message}
                        register={register("name", { required: "name is required" })}
                    />
                </Col>
            </Row>
        </Form>
    );
};

export default AddParticipant;
