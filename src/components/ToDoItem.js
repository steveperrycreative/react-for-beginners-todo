import React from 'react';

class ToDoItem extends React.Component {
    render() {
        const { title, complete } = this.props.details;
        return (
            <li>
                <span>{title} – {complete}</span>
                <button hidden={complete} onClick={() => this.props.setAsComplete(this.props.index)}>Done</button>
                <button onClick={() => this.props.deleteTodo(this.props.index)}>Delete Todo</button>
            </li>
        )
    }
}

export default ToDoItem;