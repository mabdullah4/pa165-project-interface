import * as React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";

export interface AddEventProps {}

export interface IEventForm {
    name: string;
    type: string;
}

const AddEvent: React.FC<AddEventProps> = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IEventForm>();

    const onAddEvent = () => {};

    return (
        <Form onSubmit={handleSubmit(onAddEvent)}>
            <Row>
                <Col xs={12} md={6}>
                    <FormInput
                        name="name"
                        error={errors.name?.message}
                        register={register("name", { required: "name is required" })}
                    />
                </Col>
                <Col xs={12} md={6}>
                    <FormSelect
                        name="type"
                        error={errors.type?.message}
                        register={register("type", { required: "type is required" })}
                    >
                        <option value="">Lesson</option>
                        <option value="">Tournament</option>
                    </FormSelect>
                </Col>

                <Col xs={12}>
                    <Button variant="success">Add</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default AddEvent;
