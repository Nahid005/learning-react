import React, {useState, useEffect} from 'react'

function UseEffect() {

    const [data, setData] = useState()
    
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        const fetchData = async () => {
            try{
                const response = await fetch(url).json()
            } catch (error) {
                console.log("error:", error)
            }
        }

        setData(fetchData())
    }, [])

    console.log(data)

    return(
        <div>
            
        </div>
    )
}

export default UseEffect;