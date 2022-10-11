import React, {useState, useReducer} from 'react'

const UseReducer = () => {

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

    const [list, setList] = useState(listData)
    const [data, dispatch] = useReducer(reducer, listItems )

    const reducer = (state, action) => {

    }

    const handleSubmit = () => {

    }

    console.log(list)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div> 
                    <label htmlFor="userName"> User Name: </label>
                    <input type="text" name="userName" id="" />
                </div>
                <div> 
                    <label htmlFor="userEmail"> User Email: </label>
                    <input type="email" name="userEmail" id="" />
                </div>
                <div> 
                    <label htmlFor="userPassword"> User Password: </label>
                    <input type="password" name="userPassword" id="" />
                </div>
                <button type='submit'> get data view </button>
            </form>
            <div>
                <h4> Data List </h4>

                {
                    list.map((singleLIst) => {
                        const {title, id} = singleLIst
                        return(
                            <ul key={id}>
                                <li> {title} </li>
                            </ul>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default UseReducer