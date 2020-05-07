import React from 'react'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return <div>
        {props.initialTodos.map(todo => {
            <Todo todo={todo} />
            })
        }</div>

}
export default TodoList;
