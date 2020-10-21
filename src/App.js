import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from "./components/Menu";
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/TodoList';
import Content from "./components/Content";
import { Header } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: 'flex' }}>
          <Menu />
          <Switch>
            <Content>
              <Route exact path="/">
                <Header>List of all Todos</Header>
                <TodoList />
              </Route>
              <Route path="/add">
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
