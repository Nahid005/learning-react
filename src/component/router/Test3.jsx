import React from 'react'
import {useParams} from 'react-router-dom'

const Test3 = () => {
    const contact = useParams()
    return (
        <div> 
            <h1> {contact.id} </h1>
        </div>
    )
}

export default Test3