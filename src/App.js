import './App.css';
import ClassComponent from './component/class_component/ClassComponent'
import FanctionalComponent from './component/functionalComponent/FunctionalComponent'
import StateHandlingClass from './component/class_component/StateHandlingClass'
import StateHandlingFunc from './component/functionalComponent/StateHandlingFunc'

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FanctionalComponent />
      <StateHandlingClass />
      <StateHandlingFunc />
    </div>
  );
}

export default App;
