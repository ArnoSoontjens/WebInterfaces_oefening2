import React, { useState } from "react";
import { Button, Checkbox, Form, Image } from "semantic-ui-react";
import blueprint from '../../assets/blueprint.jpeg';
import marker from "../../assets/marker.png";

const MARKER_SIZE = 50;

const TodoForm = () => {
    const [loading, setLoading] = useState(false);
    const [showMarker, setShowMarker] = useState(false);
    const [markerPos, setMarkerPos] = useState({ x: 0, y: 0 });

    const onSubmit = (formData) => {
        setLoading(true);
        console.log("Formdata:", formData);
    }

    const onPositionSelected = (event) => {
        const rect = document.getElementById("blueprint").getBoundingClientRect();
        console.log("Bounding client rect:", rect);

        const { clientX, clientY } = event;
        console.log("Event:", event);
        const x = clientX - rect.left;
        const y = clientY - rect.;

        console.log(`marker: x=${x}, y=${y}`);
        setMarkerPos({ x, y });
        setShowMarker(true);
    }

    return (
        <Form loading={loading} onSubmit={onSubmit}>
            <div style={{ position: 'relative' }} onClick={onPositionSelected}>
                <Image
                    bordered centered
                    id="blueprint"
                    src={blueprint}
                    style={{ width: "800px", height: "500px" }}
                />
                {showMarker && <Image
                    src={marker}
                    style={{ width: `${MARKER_SIZE}px`, height: `${MARKER_SIZE}px`, position: 'absolute', left: markerPos.x, top: markerPos.y }}
                />}
            </div>
            <Form.Field>
                <label>Name</label>
                <input placeholder='Name of todo' />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <input placeholder='A short description of the task' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default TodoForm;