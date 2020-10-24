import React from 'react';
import { Button, Card } from "semantic-ui-react";
import axios from 'axios';
import { DB_URL } from '../database/db';

const Todo = ({ todo }) => {

    const toggleTodoDone = async () => {
        try {
            //TODO: if response != 200 --> throw error or something
            const response = await axios.patch(`${DB_URL}/todos/${todo.id}`, { done: !done });
            console.log("Response:", response);
            //TODO: fetch todo after update
        } catch (error) {
            console.error("Could not toggle done state on todo:" + error);
        }
    }

    const deleteTodo = async () => {
        try {
            //TODO: if response != 200 --> throw error or something
            // TODO: show confirmation to user
            const response = await axios.delete(`${DB_URL}/todos/${todo.id}`);
            console.log("Response:", response);
        } catch (error) {
            console.error("Could not delete:" + error);
        }
    }

    const { title, description, createdAt, done } = todo;
    return (
        <Card>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>Aangemaakt op: {createdAt ? new Date(createdAt).toDateString() : "Niet ingevuld"}</Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={toggleTodoDone}>{done ? "Reactivate" : "Done"}</Button>
                    <Button basic color='red' onClick={deleteTodo}>Delete</Button>
                </div>
            </Card.Content>
        </Card>
    );
}
export default Todo;