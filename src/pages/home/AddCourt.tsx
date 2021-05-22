import * as React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";

import TableWrapper from "../../components/TableWrapper";

export interface CourtsProps {}

const Courts: React.FC<CourtsProps> = () => {
    const { register } = useForm();

    return (
        <Row>
            <Col xs={12} md={6}>
                <FormInput name="name" register={register("name")} />
            </Col>
            <Col xs={12} md={6}>
                <FormSelect name="name" register={register("name")}>
                    <option value="">Grass</option>
                    <option value="">Sand</option>
                    <option value="">Grass</option>
                </FormSelect>
            </Col>
        </Row>
    );
};

export default Courts;
