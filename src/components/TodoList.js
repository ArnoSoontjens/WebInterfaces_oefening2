import React, { useEffect, useState } from "react";
import { Card, Dimmer, Loader, Header } from "semantic-ui-react";
import axios from "axios";
import { DB_URL } from '../database/db';
import Todo from './Todo';

const TodoList = () => {
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState();

    useEffect(() => {
        const getAllTodos = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${DB_URL}/todos`);
                setTodos(response.data);
            } catch (error) {
                console.log("Could not load todos! " + error);
            }
            setLoading(false);
        }
        getAllTodos();
    }, []);

    return (
        <>
            {loading && <Dimmer active>
                <Loader />
            </Dimmer>}
            <Header>List of all Todos</Header>
            {todos &&
                <Card.Group>
                    {todos.map((todo) => <Todo todo={todo} />)}
                </Card.Group>
            }
        </>

    );
}

export default TodoList;