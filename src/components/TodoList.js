import React from 'react'
import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return <div>
        {props.initialTodos.map(todo => {
            return <Todo todo={todo} />
            })
        }</div>

}
export default TodoList;
