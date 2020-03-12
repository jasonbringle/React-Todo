import React from "react";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from './components/Header'
import './components/Todo.css'


const todosForReal = [
  {
    taskName: "Make a Todo!",
    id: 1528817077286,
    completed: false
  },
  {
    taskName: "You Can Select and Delete Me When You Are Done!",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todosForReal
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
  };

  toggleFinished = id => {
    console.log(id)
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

  clearTodo = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    })
  }

  render() {
    return (
      <div>
        <Header todos={this.state.todos} addTodo={this.addTodo}/>
        <TodoList clearTodo={this.clearTodo} toggleFinished={this.toggleFinished} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
