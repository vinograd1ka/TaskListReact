import React, {useState, useEffect, useRef} from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: props.todos.length - 1,
            text:input
        });

        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                placeholder="Add a todo"
                value={input}
                onChange={e => setInput(e.target.value)}
                name="text"
                className="todo-input"
                ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
        </form>
    );
};

export default TodoForm;