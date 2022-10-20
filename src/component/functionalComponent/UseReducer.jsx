import React, {useState,useReducer} from 'react'

const listData = [
    {
        id: 1,
        title: 'this is a list 1 '
    },
    {
        id: 2,
        title: 'this is a list 2 '
    },
    {
        id: 3,
        title: 'this is a list 3 '
    }
]

const UseReducer = () => {

    const [bookName, setBookName] = useState("")

    const reducer = (state, action) => {
        if(action.type === "ADD"){
            const allBooks = [...state.books, action.payload]
            return {
                ...state,
                books:allBooks
            }
        }
    }

    const [data, dispatch] = useReducer(reducer, {
        books: listData,
        modalIsOpen : false,
        isLoading: true
    } )

    const handleSubmit = (event) => {
        event.preventDefault()
        const newBook = {id:new Date().getTime().toString(), name:bookName}
        dispatch({type: "ADD", payload:newBook})
    }

    const handelCange = (e) => {
        setBookName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div> 
                    <label htmlFor="userName"> User Name: </label>
                    <input type="text" name="userName" id="" value={bookName} onChange = {handelCange}/>
                </div>
                <button type='submit'> get data view </button>
            </form>
            <div>
                <h4> Data List </h4>
                    {
                        data.books.map((list) => <p key={list.id}> {list.title} </p> )
                    }

            </div>
        </div>
    )
}

export default UseReducer