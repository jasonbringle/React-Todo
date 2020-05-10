import React from 'react';
import TodoForm from './TodoForm'

const Header = (props) =>{
    return (
    <div className="headerContainer">
        <div className="header">
        <h1>Things I Need To Get Done!</h1>
        <TodoForm 
            addTodo={props.addTodo} 
            taskName={props.taskName}
            handleChange={props.handleChange}
            />
        </div>
    </div>
    )
}
export default Header;