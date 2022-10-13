import React, {useState, useEffect} from 'react'

const useCustomHook = (url) => {

    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json() 
        })
        .then((data) => {
            setUsers(data)
            setIsLoading(false)
        })
    })



    return (
        [users, isLoading]
    )
}

export default useCustomHook