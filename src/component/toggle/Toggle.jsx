import React, {useState} from 'react'

const Toggle = () => {

    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <div>
                <p> 
                    <span> {toggle && (<p> Hello toggle </p>)} </span> 
                    <button onClick={() => {setToggle(!toggle)}}> 
                    {toggle ? 'hide': 'show'}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Toggle