import React from 'react'
import Todo from './Todo'
// import TodoForm from './TodoForm'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return (
    <div className='todoContainer'>
        <div>
            {props.todos.map(todoData => <Todo clickHandler={props.clickHandler} data={todoData}/>)}
        </div>
        <button className="clearButton"onClick={props.clearSelected}>Clear Todo</button>
    </div>
    )

}
export default TodoList;
