import React, { useState } from "react";
import { Form, Image } from "semantic-ui-react";
import blueprint from '../../assets/blueprint.jpeg';
import marker from "../../assets/marker.png";

const MARKER_SIZE = 50;
const MAP_ID = "blueprint";

const TodoForm = () => {
    const [loading, setLoading] = useState(false);
    const [showMarker, setShowMarker] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        x: 0,
        y: 0
    })

    const onChange = (e, { name, value }) => setFormData({ ...formData, [name]: value });

    const onSubmit = () => {
        setLoading(true);
        const { title, description, x, y } = formData;
        console.log("Values { title: ", title, ", description: ", description, ", x: ", x, ", y: ", y, "}")
        //TODO: add x and y and submit to backend
        setLoading(false);
    }

    const onPositionSelected = ({ clientX, clientY }) => {
        const rect = document.getElementById(MAP_ID).getBoundingClientRect();
        const x = clientX - rect.left - MARKER_SIZE / 2;
        const y = clientY - rect.top - MARKER_SIZE;

        setFormData({ ...formData, x, y });
        setShowMarker(true);
    }

    return (
        <Form loading={loading} onSubmit={onSubmit}>
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ position: 'relative' }} onClick={onPositionSelected}>
                    <Image
                        bordered
                        id={MAP_ID}
                        src={blueprint}
                        style={{
                            width: "800px", minWidth: "800px",
                            height: "500px", minHeight: "500px"
                        }}
                    />
                    {showMarker && <Image
                        src={marker}
                        style={{ width: `${MARKER_SIZE}px`, height: `${MARKER_SIZE}px`, position: 'absolute', left: formData.x, top: formData.y }}
                    />}
                </div>
            </div>
            <Form.Group>
                <Form.Input disabled name="x" label="X" value={formData.x} />
                <Form.Input disabled name="y" label="Y" value={formData.y} />
            </Form.Group>
            <Form.Input
                name="title"
                label="Titel"
                placeholder="A title for this todo"
                value={formData.name}
                onChange={onChange}
            />
            <Form.Input
                name="description"
                label="Beschrijving"
                placeholder='A short description of the task'
                value={formData.description}
                onChange={onChange}
            />
            <Form.Button content="Submit" />
        </Form>
    )
}

export default TodoForm;