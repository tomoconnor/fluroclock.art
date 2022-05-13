import './App.css';
import ClockModeToggle from './components/ClockModeToggle';
import {Display} from './components/Display';
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold font-segmented">
      Fluroclock
    </h1>
      <div className="grid grid-cols-1">
        <ClockModeToggle />
        <hr />
        <h2 className='ml-10 py-2'>Display State</h2>
        <div className="grid grid-cols-4">
          <div className="col-span-1"><Display value={'H'} /></div>
          <div className="col-span-1"><Display value={"E"} /></div>
          <div className="col-span-1"><Display value={"L"} /></div>
          <div className="col-span-1"><Display value={"P"} /></div>
          </div>
      </div>
    </div>
  );
}

export default App;
