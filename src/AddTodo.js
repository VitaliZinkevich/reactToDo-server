import React, { Component } from 'react';

class AddTodo extends Component {

  state = {todo: null}

  handleChange = (e) => {
        this.setState ({todo : e.target.value})
  }

  render() {
    return (
      <div>
        <form>
        <input id='inp' onChange = {this.handleChange}/>
        <button onClick={(e)=>{this.props.add(this.state.todo, e); document.getElementById ('inp').value = ''}} >ADD</button>
        </form>

      </div>
    );
  }
}

export default AddTodo;
