import React  from 'react';

let ViewTodos = (todoList) => {

    return (
        todoList.todoList.map ((el, ind)=>{
            return (
                <div key={ind}>
                <p className={el.done === false ? (null) : ("text-success")} onClick={()=>{todoList.doneTodo(el.id)}}>{el.task}</p>
                </div>
            )
        })
    )
}


export default ViewTodos;
