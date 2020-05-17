import { useState } from 'react';

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

const useForm = () => {
const [ todos, setTodos] = useState (initialTodos)
const [taskName, setTaskName] = useState ('')

    const handleChange = e => {
        setTaskName(e.target.value)
      }

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

return [todos, setTodos, taskName, handleChange, addTodo, clickHandler, clearSelected]

}
export default useForm
