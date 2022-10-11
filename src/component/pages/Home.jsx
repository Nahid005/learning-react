import React, {useEffect, useState} from 'react'

const Home = () => {

    const [datas, setData] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                return setData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])


    

    return(
        <div>
            {
                console.log(datas)
            }
        </div>
    )
}

export default Home