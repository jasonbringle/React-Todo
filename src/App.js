import React from 'react';
import TodoList from './components/TodoList'
import Header from './components/Header'

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

  addTodo = name => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          taskName: name,
          id: Date.now(),
          completed: false
        }
      ]
    });
  }

  handleChange = e => {
    this.setState({taskName: e.target.value})
  }

  
  render() {
    return (
      <div>
        <Header addTodo={this.addTodo} 
        taskName={this.state.taskName}
        handleChange={this.handleChange}/>
        <TodoList initialTodos={initialTodos} />
      </div>
    );
  }
}

export default App;
