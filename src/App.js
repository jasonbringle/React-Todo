import React from 'react';
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

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: initialTodos,
      taskName: ''
    }
  }

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
    console.log(this.state)
  }

  handleChange = e => {
    this.setState({taskName: e.target.value})
  }

  clickHandler = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

  clearSelected = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed})
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Header addTodo={this.addTodo}  taskName={this.state.taskName}  handleChange={this.handleChange}/>
        <TodoList clearSelected={this.clearSelected} clickHandler={this.clickHandler} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
