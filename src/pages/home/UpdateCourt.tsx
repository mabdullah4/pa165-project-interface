import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";

import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";
import { ICourt } from "./Courts";
import courtService from "../../service/court";

export interface ICourtForm {
    name: string;
    type: string;
    location: string;
    isAvailable: boolean;
}

const UpdateCourt: React.FC = () => {
    const { courtId } = useParams<{ courtId: string }>();
    const { push } = useHistory();
    const [court, setCourt] = useState<ICourt>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        courtService
            .fetch<ICourt>(parseInt(courtId))
            .then((response) => {
                if (response.data == null) {
                    toast.error("Court No found");
                    push("/courts/");
                }
                setCourt(response.data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<ICourtForm>();

    const onUpdateCourt = (data: ICourtForm) => {
        courtService
            .update(data, parseInt(courtId))
            .then((response) => {
                toast.success("Successfully update the court");
                push("courts/");
            })
            .catch(console.error);
    };
    if (loading) {
        return <div></div>;
    }
    return (
        <Form onSubmit={handleSubmit(onUpdateCourt)}>
            <Row>
                <Col xs={12} md={6}>
                    <FormInput
                        name="name"
                        title="Court Name"
                        value={court?.name}
                        error={errors.name?.message}
                        register={register("name", { required: "Court Name is required" })}
                    />
                </Col>
                <Col xs={12} md={6}>
                    <FormInput
                        name="location"
                        title="Location"
                        value={court?.location}
                        error={errors.location?.message}
                        register={register("location", { required: "Location is required" })}
                    />
                </Col>
                <Col xs={12} md={6}>
                    <FormSelect
                        name="type"
                        title="Court Type"
                        value={court?.type}
                        error={errors.type?.message}
                        register={register("type", { required: "Court Type is required" })}
                    >
                        <option value="Grass">Grass</option>
                        <option value="Sand">Sand</option>
                        <option value="Clay">Clay</option>
                    </FormSelect>
                </Col>

                <Col xs={12}>
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link className="btn btn-info ml-2" to="/pa165/courts/">
                            Back
                        </Link>
                    </div>
                </Col>
            </Row>
        </Form>
    );
};

export default UpdateCourt;
