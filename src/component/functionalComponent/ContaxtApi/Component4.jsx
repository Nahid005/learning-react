import React, {useContext} from 'react'

import { UserContaxt } from './ContaxtApi'

const Component4 = () => {

    const user = useContext(UserContaxt)

    console.log(user)

    return (
        <div>
            <h1> {user.id}  </h1>
            <h1> {user.name}  </h1>
        </div>
    )
}

export default Component4