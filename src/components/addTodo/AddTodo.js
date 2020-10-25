import React, { useContext } from "react";
import { Container, Header } from "semantic-ui-react";
import TodoForm from "./TodoForm";
import axios from "axios";
import { DB_URL } from '../../database/db';
import { useHistory } from 'react-router-dom';
import TodoContext from '../../contexts/todoContext';

const AddTodo = () => {
    const history = useHistory();
    const { reloadTodos } = useContext(TodoContext);

    const addTodo = async (todoData) => {
        const { title, description, x, y } = todoData;
        const now = new Date().getTime();
        try {
            const response = await axios.post(`${DB_URL}/todos`, { title, description, x, y, createdAt: now, updatedAt: now });
            reloadTodos();
        } catch (error) {
            console.error("Could not create new todo:" + error);
        }
        history.push("/");
    }


    return (
        <Container style={{ padding: "50px" }}>
            <Header>Add a new to-do</Header>
            <TodoForm onSubmit={addTodo} />
        </Container>
    )
}

export default AddTodo;