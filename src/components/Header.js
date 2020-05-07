import React from 'react';
import TodoForm from './TodoForm'

const Header = (props) =>{
    return (
    <div className="header">
    <h1>TODOS</h1>
    <TodoForm 
        addTodo={props.addTodo} 
        taskName={props.taskName}
        handleChange={props.handleChange}
        />
    </div>
    )
}
export default Header;