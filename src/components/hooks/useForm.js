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

const useForm = (initialState) => {
const [ todos, setTodo] = useState ({})
// const [taskName, setTaskName] = useState ('')
const [values, setValues] = useState(initialTodos);

    const handleChange = e => {
        setTodo([
            ...values,
            {[e.target.name]: e.target.value,
            id: Date.now(),
            completed: false}
        ])
    }

    const addTodo = (e) => {
        e.preventDefault();
        setValues(todos);
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

return [values, handleChange, addTodo, clickHandler, clearSelected]

}
export default useForm
