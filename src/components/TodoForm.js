import React from 'react'

const TodoForm = props => {
    return (
        <div>
        <form onSubmit={props.addTodo}>
            <input type='text' 
            name='To-do' 
            placeholder='Item to do!'
            value={props.taskName}
            onChange={props.handleChange}
            >
            </input>
            <button>Submit A To-do!</button>
        </form>
        </div>
    )
}
export default TodoForm;