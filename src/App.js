import React, { useState} from 'react';
import TodoList from './components/TodoList'
import Header from './components/Header'
import './components/Todo.css'

const initialTodos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export const App = () =>{
  // constructor(){
  //   super()
  //   this.state = {
  //     todos: initialTodos,
  //     taskName: ''
  //   }
  // }

  const [ todos, setTodos] = useState (initialTodos)
  const [taskName, setTaskName] = useState ('')

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]);
    console.log(todos)
  }

  const handleChange = e => {
    setTaskName(e.target.value)
  }

  const clickHandler = id => {
    setTodos(todos.map(item => {
        if (item.id === id){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    )
  }

  const clearSelected = () => {
    setTodos(todos.filter(item => {
        return !item.completed})
    )
  }

    // console.log(this.state)
    return (
      <div className='main-page'>
          <Header addTodo={addTodo}  taskName={taskName}  handleChange={handleChange}/>
          <TodoList clearSelected={clearSelected} clickHandler={clickHandler} todos={todos}/>
      </div>
    );
  
}

export default App;
