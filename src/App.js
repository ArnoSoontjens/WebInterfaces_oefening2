import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from "./components/Menu";
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/TodoList';
import Content from "./components/Content";
import { addTodoRoute, homeRoute } from './routes';
import useAllTodos from './hooks/useAllTodos';

function App() {
  const { data: todos } = useAllTodos();

  return (
    <div className="App">
      <Router>
        <div style={{ display: 'flex' }}>
          <Menu numberOfTodos={todos ? todos.length : 0} />
          <Switch>
            <Content>
              <Route exact path={homeRoute}>
                <TodoList />
              </Route>
              <Route path={addTodoRoute}>
                <AddTodo />
              </Route>
            </Content>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
