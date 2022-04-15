import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) return <TodoForm edit={edit} onSubmit={submitUpdate} />

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <FontAwesomeIcon className='edit-icon' onClick={() => setEdit({ id: todo.id, value: todo.text })} icon={faPenToSquare}></FontAwesomeIcon>
                <FontAwesomeIcon className='delete-icon' onClick={() => removeTodo(todo.id)} icon={faCircleXmark} />
            </div>
        </div>
    ))
};

export default Todo;