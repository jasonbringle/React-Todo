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

return [todos, setTodos, taskName, handleChange, addTodo]

}
export default useForm
