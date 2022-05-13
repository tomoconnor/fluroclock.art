import './App.css';
import ClockModeToggle from './components/ClockModeToggle';
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold font-segmented">
      Fluroclock
    </h1>
      <header className="App-header">
        <ClockModeToggle />
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
      </header>
    </div>
  );
}

export default App;
