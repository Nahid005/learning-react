import React, {useReducer} from 'react'

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

    const reducer = (state, action) => {
        return state
    }

    const [data, dispatch] = useReducer(reducer, {
        books: listData,
        modalIsOpen : false,
        isLoading: true
    } )

    const handleSubmit = (event) => {
        event.preventDefault()

        const addNewBook = 

        dispatch({type: "ADD", payload:''})
    }

    const handelCange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div> 
                    <label htmlFor="userName"> User Name: </label>
                    <input type="text" name="userName" id="" onChange = {handelCange}/>
                </div>
                <button type='submit'> get data view </button>
            </form>
            <div>
                <h4> Data List </h4>


            </div>
        </div>
    )
}

export default UseReducer