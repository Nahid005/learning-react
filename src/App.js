import './App.css';
import ClassComponent from './component/classComponent/ClassComponent'
import FanctionalComponent from './component/functionalComponent/FunctionalComponent'
import StateHandlingClass from './component/classComponent/StateHandlingClass'
import StateHandlingFunc from './component/functionalComponent/StateHandlingFunc'
import PropsClass from './component/classComponent/PropsClass'
import PropsFunc from './component/functionalComponent/PropsFunc'
import FormHandleClass from './component/classComponent/FormHandleClass'
import FormHandleFunc from './component/functionalComponent/formHandleFunc'
import Home from './component/todoApp/Home'
import UseEffect from './component/functionalComponent/UseEffect'

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FanctionalComponent />
      <StateHandlingClass />
      <StateHandlingFunc />
      <PropsClass title = " Hello Bangladesh " />
      <PropsFunc title = " Germany Munich " />
      <FormHandleClass />
      <FormHandleFunc />
      <UseEffect />
      <Home />
    </div>
  );
}

export default App;
