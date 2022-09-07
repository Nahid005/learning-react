import {useState} from 'react'

function StateHandlingFunc() {
    const [count , setCount] = useState(0)

    const HandleInc = () => {
        setCount({
            count: count + 1
        })
    }

    const HandleDic = () => {
        setCount({
            count: count-1
        })
    }

    return (
        <div>
            <h1> Count : {count}</h1>
            <button onClick = {HandleDic}> - </button>
            <button onClick = {HandleInc}> + </button>
        </div>
    )
}

export default StateHandlingFunc;