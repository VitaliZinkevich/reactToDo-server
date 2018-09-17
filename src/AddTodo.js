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
        <input onChange = {this.handleChange}/>
        
        <button >ADD</button>
        </form>



      </div>
    );
  }
}

export default AddTodo;