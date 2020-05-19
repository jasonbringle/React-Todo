import React from 'react';
// import TodoList from './components/TodoList'
import Header from './components/Header'
import './components/Todo.css'
import useForm from './components/hooks/useForm'



export const App = () =>{

  // const [ todos, setTodos] = useState (initialTodos)
  // const [taskName, setTaskName] = useState ('')
  const [values, todos, handleChange, addTodo, clickHandler, clearSelected] = useForm([{
    task:'',
    id:'',
    completed:''
  }])

  // const addTodo = (e) => {
  //   e.preventDefault();
  //   setTodos([...todos,
  //       {
  //         task: taskName,
  //         id: Date.now(),
  //         completed: false
  //       }
  //     ]);
  //   console.log(todos)
  // }

  // const handleChange = e => {
  //   setTaskName(e.target.value)
  // }

  // const clickHandler = id => {
  //   setTodos(todos.map(item => {
  //       if (item.id === id){
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         };
  //       }
  //       return item;
  //     })
  //   )
  // }

  // const clearSelected = () => {
  //   setTodos(todos.filter(item => {
  //       return !item.completed})
  //   )
  // }
  // console.log("todos in App.js", todos)
    return (
      <div className='main-page'>
          <Header />
          <div>
            <form className='form' onSubmit={addTodo}>
                <input type='text' 
                placeholder='Item to do!'
                value={todos.task}
                onChange={handleChange}
                name='task' 
                >
                </input>
                <button>Submit A To-do!</button>
            </form>

            <div className='todoContainer'>
              <div>
                {/* {console.log("APP.js values", values)} */}
                {/* {console.log("APP.js todos", todos)} */}

                {values.map(todoData => {
                  return (
                  <div key={todoData.id} className="todoContainer">
                      <div className="todo">
                          <div 
                          className={`active${todoData.completed ? " no" : ""}`}
                          onClick={e => clickHandler(todoData.id)}
                          >
                          <p>{todoData.task}</p>
                          </div>
                      </div>
                  </div> )
                  })
                }
              </div>

              <button className="clearButton"onClick={clearSelected}>Clear Todo</button>
            </div>
          </div>
          
      </div>
    );
  
}

export default App;
