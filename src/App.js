import React from 'react';
import TodoForm from './components/TodoForm'
// import TodoList from './components/TodoList'

const todos = [
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
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state={
      todos
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = taskName =>{
    this.setState({
      todos: [...this.state.todos,{
        tasks: taskName,
        id:  Date.now(),
        completed: false
      }]
    })
  }
   
  render() {
    return (
      <div>
        <TodoForm todos={this.state.todos} addTask={this.addtask}/>
        {/* <TodoList/> */}
      </div>
    );
  }
}

export default App;
