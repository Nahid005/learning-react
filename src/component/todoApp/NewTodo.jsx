import React, {useState} from 'react'

function NewTodo (props) {

    const [todo, setTodo] = useState("")

    const handleTodo = (e) => {
        setTodo (e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createTodo(todo)
    }
    
    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="todo"> Create New Todo </label>
            <input type="text" name ="todo" id="todo" value={todo} onChange={handleTodo}/>
            <button type="submit"> creact new todo </button>
        </form>
    )
}

export default NewTodo