import React from 'react';
import TodoContext from './todoContext';
import useAllTodos from '../hooks/useAllTodos';

const TodoContextProvider = ({ children }) => {

    const { data, loading, reload } = useAllTodos();

    const getLength = () => data ? data.length : 0;

    return (
        <TodoContext.Provider
            value={{
                todos: data,
                loading,
                reloadTodos: reload,
                numberOfTodos: getLength()
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;