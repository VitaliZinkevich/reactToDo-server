import React, { Component } from 'react';
import ViewTodos from './ViewTodos'
import AddTodo from './AddTodo'
import './App.css';

class App extends Component {
  
  state = {todos: [
    {task: 'Первое', id: 1},
    {task: 'Второе', id: 2},
  ]}
  
  addTodo = () => {
    

  }

  render() {
    return (
      <div className="App">
      <h1 className="App-title">Todo List</h1>
      <ViewTodos todoList={this.state}/>
      <AddTodo add={this.addTodo}/>
      </div>
    );
  }
}

export default App;
