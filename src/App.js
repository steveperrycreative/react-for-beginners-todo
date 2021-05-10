import React from "react";
import AddToDoForm from "./components/AddToDoForm";
import sampleTodos from "./sample-todos";
import ToDoItem from "./components/ToDoItem";

class App extends React.Component {
    state = {
        todos: sampleTodos
    };
    setAsComplete = key => {
        // 1. copy existing state
        const todos = { ...this.state.todos };
        // 2. update the todo's status
        const todo = todos[key];
        todo.complete = 1;
        // 3. update state with completed todo
        todos[key] = todo;
        // 4. set state
        this.setState({ todos });
    };
    addToDo = todo => {
        // 1. copy existing state
        const todos = { ...this.state.todos };
        // 2. add new todo to todos
        todos[`id-${Date.now()}`] = todo;
        // 3. set state
        this.setState({ todos });
    };
    deleteTodo = key => {
        // 1. copy existing state
        const todos = { ...this.state.todos };
        // 2. remove todo
        // 2a. if we are using Firebase we need to set it to null
        // todos[key] = null;
        // 2b. otherwise we can just do
        delete todos[key];
        // 3. set state
        this.setState({ todos });
    };
    clearDoneTodos = () => {
        // 1. copy existing state
        const todos = { ...this.state.todos };
        // 2. remove todos with complete status
        const newTodos = [];
        for (const todo in todos) {
            if (!todos[todo].complete) {
                newTodos[todo] = todos[todo];
            }
        }
        // 3. set state
        this.setState({ todos: {...newTodos} });
    };
    render() {
        return (
            <div>
                <AddToDoForm addTodo={this.addToDo} />
                <ul>
                    {Object.keys(this.state.todos).map(key => (
                        <ToDoItem
                            key={key}
                            index={key}
                            details={this.state.todos[key]}
                            setAsComplete={this.setAsComplete}
                            deleteTodo={this.deleteTodo}
                        />
                    ))}
                </ul>
                <button onClick={this.clearDoneTodos}>
                    Clear All Done Todos
                </button>
            </div>
        );
    }
}

export default App;
