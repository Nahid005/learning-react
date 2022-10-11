import React, {useState,useRef} from 'react'

const useRefHooks = () => {

    const [inputValue, setInputValue] = useState()
    
    const userName = useRef();
    const userEmail = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue([userName.current.value, userEmail.current.value])
    }

    console.log(inputValue)

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <div >
                    <label htmlFor="userName"> User Name :</label>
                    <input type="text" name="userName" id="" ref={userName} />
                </div>
                <div>
                    <label htmlFor="userEmail"> User Email :</label>
                    <input type="email" name="userEmail" id="" ref={userEmail}/>
                </div>
                <button type="submit"> get new data </button>
            </form>
        </div>
    )
}

export default useRefHooks