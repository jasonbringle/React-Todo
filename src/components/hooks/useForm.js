import { useState } from 'react';
import useLocalStorage from './useLocalStorage'

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

const useForm = (initialState, key) => {
const [ todos, setTodo] = useState ({})
// const [taskName, setTaskName] = useState ('')
const [values, setValues] = useLocalStorage(initialTodos, key);

    const handleChange = e => {
        setTodo(
            {[e.target.name]: e.target.value,
            id: Date.now(),
            completed: false}
        )
    }

    const addTodo = (e) => {
        e.preventDefault();
        setValues([...values,todos]);
        clearField()
    }

    const clearField = () => {
      // setTodo({task:''});
      setTodo({
      task:'',
      id: '',
      completed: ''
    })
    }

    const clickHandler = id => {
        setValues(values.map(item => {
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
        setValues(values.filter(item => {
        return !item.completed})
    )
    }

return [values,todos, handleChange, addTodo, clickHandler, clearSelected ]

}
export default useForm
