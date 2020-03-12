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
    e.preventDefault();
    this.props.addTodo(this.state.taskName);
    this.setState({taskName: ''})
  };

  render() {
    return (
      <form className='form' onSubmit={this.addTask}>
        <input
          type="text"
          name="task"
          value={this.state.taskName}
          placeholder="Task Name"
          onChange={this.handleChange}
        />
        <button>Add a Todo!</button>
      </form>
    );
  }
}
