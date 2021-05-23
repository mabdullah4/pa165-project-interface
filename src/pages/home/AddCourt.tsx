import * as React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";

export interface AddCourtProps {}

export interface ICourtForm {
    name: string;
    type: string;
}

const AddCourt: React.FC<AddCourtProps> = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<ICourtForm>();

    const onAddCourt = () => {};

    return (
        <Form onSubmit={handleSubmit(onAddCourt)}>
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
                        name="name"
                        error={errors.type?.message}
                        register={register("type", { required: "type is required" })}
                    >
                        <option value="Grass">Grass</option>
                        <option value="Sand">Sand</option>
                        <option value="Clay">Clay</option>
                    </FormSelect>
                </Col>
            </Row>
        </Form>
    );
};

export default AddCourt;
