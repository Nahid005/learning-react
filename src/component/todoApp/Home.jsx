import React, {useState} from 'react'

import Todos from './Todos';
import NewTodo from './NewTodo'

const allTodos = ["frist todo"]

function Home () {

    const [todos, setNewTodo] = useState(allTodos)

    const onNewTodo = (newTodo) => {
        setNewTodo([...todos, newTodo])
    }

    return (
        <div>
            <NewTodo createTodo = {onNewTodo} />
            <Todos todos = {todos} />
        </div>
    )
}

export default Home;