import React from 'react'

import useCustomHook from './useCustomHook'

const dataLoadingMessage = 'data is loading'

const CustomHooks = () => {

    const [users, isLoading] = useCustomHook('https://jsonplaceholder.typicode.com/users')

    return (
        <>
        <p> {isLoading && dataLoadingMessage} </p>
            {
                users && users.map((user) => {
                    return (
                        <div key={user.id}>
                            <p> {user.name} </p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CustomHooks