import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState(
            {
                todo: e.target.value
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            todo: '', // initialize the todo task 
            list: [...this.state.list, {
                text: this.state.todo,
                completed: false
            }]
        })
    }

    render(){
        let items = this.state.list.map((el, index) => {
            return (<TodoList key={index}
                text={el.text}
            completed={el.completed} /> )
        })
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.todo} onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
                {items}
            </div>
        )
    }
}

export default Todo;