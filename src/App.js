import './App.css';
// import ClassComponent from './component/classComponent/ClassComponent'
// import FanctionalComponent from './component/functionalComponent/FunctionalComponent'
// import StateHandlingClass from './component/classComponent/StateHandlingClass'
// import StateHandlingFunc from './component/functionalComponent/StateHandlingFunc'
// import PropsClass from './component/classComponent/PropsClass'
// import PropsFunc from './component/functionalComponent/PropsFunc'
// import FormHandleClass from './component/classComponent/FormHandleClass'
// import FormHandleFunc from './component/functionalComponent/formHandleFunc'
// import Home from './component/todoApp/Home'
// import UseEffect from './component/functionalComponent/UseEffect'
// import Toggle from './component/toggle/Toggle'
// import UseRef from './component/functionalComponent/UseRef';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Blog from './component/pages/Blog'
import Service from './component/pages/Service'
import Contact from './component/pages/Contact'
import Navbar from './component/layout/Navbar';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FanctionalComponent />
      <StateHandlingClass />
      <StateHandlingFunc />
      <PropsClass title = " Hello Bangladesh " />
      <PropsFunc title = " Germany Munich " />
      <FormHandleClass />
      <FormHandleFunc />
      <UseEffect />
      <Home /> 
      <UseEffect />
      <Toggle />
      */}
      {/* <UseRef /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/service' element={<Service />}></Route>
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
