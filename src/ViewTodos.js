import React  from 'react';

let ViewTodos = (todoList) => {
  
    
    return (
        todoList.todoList.todos.map ((el, ind)=>{
            console.log (ind)
            console.log (el)
            return (
                <div key={ind}>
                <p>{el.task}</p>
                <button>Delete</button> 
                </div>
            )
        })
    )
}


export default ViewTodos;