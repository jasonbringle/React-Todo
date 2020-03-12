import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    
  return (
    <div className='todoContainer'>
        <div className="todoList">
        {props.todos.map(thing => (
            <Todo
            key={thing.id}
            thing={thing}
            toggleFinished={props.toggleFinished}
            /> 
        ))}
        </div>

        <div className="clearButton">
            <button onClick={props.clearTodo}>Clear Todo</button>
        </div>
    </div>
  );
};
export default TodoList;
