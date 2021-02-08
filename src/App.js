import logo from './logo.svg';
import './App.css';
import Demo from './components/demo' 
import ClassBasedCom from './components/classbasedComponents'
// import Hooks from './components/hooksinc'
// import data from './data/data.json'
function App() {
  return (
    <div className="App">
      <Demo></Demo>
      <Demo />
      <ClassBasedCom />
      {/* <h1>hooks concept</h1>
      <Hooks /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      // </header> */}
      
    </div>
  );
}

export default App;
