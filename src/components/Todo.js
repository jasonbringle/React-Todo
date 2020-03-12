import React from "react";

const Todo = props => {
  return (
    <div className="todoContainer">
        <div className="todo">
            <div 
            className={`thing${props.thing.completed ? " completed": ""}`}
            onClick={e => props.toggleFinished(props.thing.id)}
            >
            <p>{props.thing.taskName}</p>
            </div>
        </div>
    </div>
  );
  
}
export default Todo;
