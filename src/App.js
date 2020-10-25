import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from "./components/Menu";
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/TodoList';
import Content from "./components/Content";
import { addTodoRoute, homeRoute } from './routes';
import TodoContextProvider from './contexts/TodoContextProvider';

function App() {

  return (
    <div className="App">
      <Router>
        <div style={{ display: 'flex' }}>
          <TodoContextProvider>
            <Menu />
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
          </TodoContextProvider>
        </div>
      </Router>
    </div >
  );
}

export default App;
