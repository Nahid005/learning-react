import React, {useState} from 'react'

import Component2 from './Component2'
import { UserContaxt } from './ContaxtApi'

const Component1 = () => {

    const [user, setUser] = useState({id: 0, name: 'Nahid Hassan'})

    return (
        <div>
            <UserContaxt.Provider value={user}>
                <Component2 />
            </UserContaxt.Provider>
        </div>
    )
}

export default Component1