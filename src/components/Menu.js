import React, { useContext, useState } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import TodoContext from '../contexts/todoContext';

const ALL_TODOS = "all_todos";
const ADD_TODO = "add_todo";

const MenuExampleVertical = () => {
    const [activeItem, setActiveItem] = useState();
    const { numberOfTodos } = useContext(TodoContext);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu vertical>
            <Menu.Item
                name={ALL_TODOS}
                active={activeItem === ALL_TODOS}
                onClick={handleItemClick}
                as={Link}
                to='/'
            >
                <Label color='teal'>{numberOfTodos}</Label>
                All Todo's
            </Menu.Item>
            <Menu.Item
                name={ADD_TODO}
                active={activeItem === ADD_TODO}
                onClick={handleItemClick}
                as={Link}
                to='/add'
            >
                Add a new todo
            </Menu.Item>
            <Menu.Item>
                <Input icon='search' placeholder='Search mail...' />
            </Menu.Item>
        </Menu>
    );
}

export default MenuExampleVertical