import React from 'react'
import {BrowserRouter,Routes, Route, Link,} from 'react-router-dom'
import Test1 from '../router/Test1'
import Test2 from '../router/Test2'
import Test3 from '../router/Test3'

const RouterComponent = () => {
    return (
        <>  
            <BrowserRouter>
                <nav>
                    <Link to='/'> Home </Link>
                    <Link to='/about'> About </Link>
                    <Link to='/contact'> Contact </Link>
                </nav>
                <Routes>
                    <Route path='/' element= {<Test1 />}></Route>
                    <Route path='/about' element={<Test2 />}></Route>
                    <Route path='/contact/:id' element={<Test3 />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterComponent