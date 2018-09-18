import React, { Component } from 'react';
import ViewTodos from './ViewTodos'
import AddTodo from './AddTodo'
import './App.css';

class App extends Component {

  state = {todos: [
    {task: 'Первое', id: 1, done: false},
    {task: 'Второе', id: 2, done: false},
  ]}

  addTodo = (todo, e) => {
      e.preventDefault()
      
    let newTodo = {task: todo, id: Math.floor (Math.random()*1000), done: false}
    let adding = [...this.state.todos, newTodo]
    //console.log (this.state)
    this.setState ({todos: adding})


  }

  doneTodo = (id)=>{


    let doneOrDelete = this.state.todos.filter(
      (el)=> {
        if (el.id === id) {
          if (el.done === true) {
            return false
          } else {
            return true
          }
        } else {
          return true
        }
      }
    )

     doneOrDelete.map (
      (el) => {
        if (el.id === id ) {
          if (el.id === true) {
            return null
          } else {
            el.done = true
            return el
          }
        } else {
          return el
        }

      }
    )
    console.log (doneOrDelete)
    this.setState ({todos: doneOrDelete })
  }

  render() {
    return (
      <div className="App">
      <h1 className="App-title">Todo List</h1>
      <ViewTodos  todoList={this.state.todos}
                  doneTodo = {this.doneTodo}/>
      <AddTodo add={this.addTodo}/>
      </div>
    );
  }
}

export default App;
