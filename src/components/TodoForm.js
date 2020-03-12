import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
  }

  handleChange = e => {
      console.log(e.target.value)
    this.setState({ taskName: e.target.value });
  };

  addTask = e => {
    this.props.addTodo(this.state.taskName);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          name="task"
          placeholder="Task Name"
          onChange={this.handleChange}
        />
        <button>Add a Todo!</button>
      </form>
    );
  }
}
