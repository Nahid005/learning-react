import React, {useEffect, useState} from 'react'

const Home = () => {

    const [user, setUser] = useState()

    useEffect(()=> {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const fetchData = async () => {
            try{
                const response = await fetch(url)
                const json = await response.json()
                console.log(json)
            }
            catch(error) {
                console.log(error)
            }
        }

        setUser(fetchData())
    }, [])



    return(
        <div>
            
        </div>
    )
}

export default Home