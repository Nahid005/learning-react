import React, {useState, useRef} from 'react'

const UseRef = () => {

    const [user, setUser] = useState()
    const name = useRef()
    const password = useRef()

    const submitHandle = (e) => {
        e.preventDefault()
        setUser(name.current.value, password.current.value);
    }

    return (
        <div>
            <form onSubmit={submitHandle}>
                <div>
                    <label htmlFor="name"> Enter Your Name </label>
                    <input type="text" name="name" id="name" ref={name}/>
                </div>
                <div>
                    <label htmlFor="password"> Enter Your Name </label>
                    <input type="password" name="password" id="password" ref={password}/>
                </div>
                <div>
                    <button type="submit"> submit your data </button>
                </div>
            </form>
        </div>
    )
}

export default UseRef;