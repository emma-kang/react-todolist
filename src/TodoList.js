import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: this.props.text,
            completed: this.props.completed
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({
            completed: !this.state.completed
        })
    }

    render(){
        return(
            <div>
                <li onClick={this.handleClick} style={{textDecoration: this.state.completed ? 'line-through' : 'none'}}>
                    {this.state.task}
                </li>
            </div>
        )
    }
}

export default TodoList;