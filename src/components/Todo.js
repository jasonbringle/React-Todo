import React from "react"

const Todo = props => {
    // console.log(props)
    return (
    <div 
    className={`active${props.data.completed ? " no" : ""}`}
    onClick={e => props.clickHandler(props.data.id)}
    >
        <h1>{props.data.task}</h1>
    </div>
        )

}
export default Todo;