import React, { useState } from "react";
import { Button, Checkbox, Container, Form, Header } from "semantic-ui-react";
import TodoForm from "./TodoForm";

const AddTodo = () => {
    return (
        <Container>
            <Header>Add a new to-do</Header>
            <TodoForm />
        </Container>
    )
}

export default AddTodo;