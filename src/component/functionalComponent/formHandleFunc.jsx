import {useState} from 'react'

function formHandleFunc () {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fristName, setFristName] = useState()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [lastName, setLastName] = useState()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [number, setnumber] = useState()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState()

    const handleFristName = (e) => {
        setFristName (e.target.value)
    }
    const handleLastName = (e) => {
        setLastName (e.target.value)
    }
    const handleNumber = (e) => {
        setnumber (e.target.value)
    }
    const handleEmail = (e) => {
        setEmail (e.target.value)
    }
    const handlePassword = (e) => {
        setPassword (e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const userInformation = {
            fristName,
            lastName,
            email,
            number,
            password
        }

        console.log(userInformation)
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" name = 'fristName' id= 'fristName' value = {fristName} onChange = {handleFristName} /> <br />
                <input type="text" name = 'lastName' id= 'lastName' value = {lastName} onChange = {handleLastName} /> <br />
                <input type="number" name = 'number' id= 'number' value = {number} onChange = {handleNumber} /> <br />
                <input type="email" name = 'email' id= 'email' value = {email} onChange = {handleEmail} /> <br />
                <input type="password" name = 'password' id= 'password' value = {password} onChange = {handlePassword} /> <br />
                <button type="submit"> Submit Now </button>
            </form>
        </div>
    )
}

export default formHandleFunc;