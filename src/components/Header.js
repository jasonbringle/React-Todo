import React from 'react'
import TodoForm from './TodoForm'

export default function Header(props){

    return(
        <div className='header'>
        <h1>To Do's</h1>
        <TodoForm addTodo={props.addTodo}/>
        </div>
    )
}
