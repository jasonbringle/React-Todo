import React from 'react'

export default class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            task:''
        }
    }

    

    handleChange = e =>{
        this.setState({ task:e.target.value })
    }

    addTask = e => {
        e.preventDefaut();

    }

    render() {
        return(
            <form onSubmit={this.addTask}>
            <input type='text' 
            name='task' 
            placeholder='Task Name' 
            value={this.state.task}
            onChange={this.handleChange} />
            <button>Press Me!</button>
            </form>
        )
    }
}
