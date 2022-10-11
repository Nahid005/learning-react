import React, {useEffect, useState} from 'react'

const Home = () => {

    const [datas, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    },[])

    return(
        <div>
            {
                datas.map((data) => {
                    return (
                        <div>
                            <p> {isLoading && <p> loading   </p> } </p>
                            <p> {data.name} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home