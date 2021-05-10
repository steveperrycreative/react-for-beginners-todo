import React from 'react';

class AddToDoForm extends React.Component {
    titleRef = React.createRef();
    createToDo = e => {
        e.preventDefault();
        const todo = {
            title: this.titleRef.current.value,
            complete: 0
        };
        this.props.addTodo(todo);
        // reset the form
        e.currentTarget.reset();
    };
    render() {
        return (
            <form onSubmit={this.createToDo}>
                <input ref={this.titleRef} type="text" name="name" placeholder="Name"/>
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

export default AddToDoForm;