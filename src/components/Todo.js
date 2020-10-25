import React from 'react';
import { Button, Card, Confirm } from "semantic-ui-react";
import { useState } from 'react';

const Todo = ({ todo, onDelete, onToggleDone }) => {
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    const { title, description, createdAt, done } = todo;
    return (
        <>
            <Confirm
                open={showConfirmDialog}
                header="Je gaat deze todo verwijderen!"
                content={"Ben je zeker?"}
                confirmButton="Ja, verwijder Todo"
                cancelButton="Annuleren"
                onCancel={() => setShowConfirmDialog(false)}
                onConfirm={() => onDelete(todo.id)}
            />
            <Card>
                <Card.Content>
                    <Card.Header className={done ? "done" : "null"}>{title}</Card.Header>
                    <Card.Meta>Aangemaakt op: {createdAt ? new Date(createdAt).toDateString() : "Niet ingevuld"}</Card.Meta>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic={done ? true : false} color={done ? 'orange' : 'green'} onClick={() => onToggleDone(todo.id)}>{done ? "Reactivate" : "Done"}</Button>
                        <Button color='red' onClick={() => setShowConfirmDialog(true)}>Delete</Button>
                    </div>
                </Card.Content>
            </Card>
        </>
    );
}
export default Todo;