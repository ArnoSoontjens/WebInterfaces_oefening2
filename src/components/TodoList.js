import React from "react";
import { Card, Loader, Header } from "semantic-ui-react";
import axios from "axios";
import { DB_URL } from '../database/db';
import Todo from './Todo';
import { addTodoRoute } from "../routes";
import { Link } from 'react-router-dom';
import useAllTodos from '../hooks/useAllTodos';

const TodoList = () => {

    const { data: todos, loading, reload: reloadTodos } = useAllTodos();

    const toggleTodoDone = async (id) => {
        try {
            const currentTodo = todoWithId(id);
            const response = await axios.patch(`${DB_URL}/todos/${id}`, { done: !currentTodo.done });
            reloadTodos();
        } catch (error) {
            console.error("Could not toggle done state on todo:" + error);
        }
    }

    const deleteTodo = async (id) => {
        try {
            //TODO: if response != 200 --> throw error or something
            const response = await axios.delete(`${DB_URL}/todos/${id}`);
            reloadTodos();
        } catch (error) {
            console.error("Could not delete:" + error);
        }
    }

    const todoWithId = (id) => todos.find(todo => todo.id === id);

    return (
        <>
            {loading && <Loader active={true} />}
            <Header>List of all Todos</Header>
            {!loading && todos && todos.length === 0 &&
                <p>Je hebt nog geen Todo's toegevoegd! <Link to={addTodoRoute}>Klik hier</Link> om je eerste todo toe te voegen!</p>
            }
            {todos &&
                <Card.Group>
                    {todos.map((todo) =>
                        <Todo
                            key={todo.id}
                            todo={todo}
                            onDelete={deleteTodo}
                            onToggleDone={toggleTodoDone}
                        />)}
                </Card.Group>
            }
        </>

    );
}

export default TodoList;