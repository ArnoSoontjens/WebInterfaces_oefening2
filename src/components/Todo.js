import React from 'react';
import { Button, Card } from "semantic-ui-react";

const Todo = ({ todo }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Header</Card.Header>
                <Card.Meta>Meta</Card.Meta>
                <Card.Description>Description</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>Done</Button>
                    <Button basic color='red'>Delete</Button>
                </div>
            </Card.Content>
        </Card>
    );
}
export default Todo;