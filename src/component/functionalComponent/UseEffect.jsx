import React, {useState, useEffect} from 'react'

function UserInfo (props) {

    const {name, username, email, address} = props.singleUser

    return(
        <div>
            <article>
                <p> {name} </p>
                <p> {username} </p>
                <p> {email} </p>
                <p> {address.city} </p>
            </article>
        </div>
    )
}

function UseEffect() {

    const [user, setUser] = useState(null)

    useEffect(()=> {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            return res.json()
        })
        .then((data)=> {
            setUser(data)
            console.log(data)
        }) 

    }, [])

    return(
        <div>
            {user && user.map((singleUser) => <UserInfo key = {singleUser.id} singleUser = {singleUser} /> )}
        </div>
    )
}

export default UseEffect;