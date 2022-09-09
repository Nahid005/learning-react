import './App.css';
import ClassComponent from './component/classComponent/ClassComponent'
import FanctionalComponent from './component/functionalComponent/FunctionalComponent'
import StateHandlingClass from './component/classComponent/StateHandlingClass'
import StateHandlingFunc from './component/functionalComponent/StateHandlingFunc'
import PropsClass from './component/classComponent/PropsClass'
import PropsFunc from './component/functionalComponent/PropsFunc'
import FormHandleClass from './component/classComponent/FormHandleClass'
import FormHandleFunc from './component/functionalComponent/formHandleFunc'

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
    </div>
  );
}

export default App;
