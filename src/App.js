import './App.css';
import ClockModeToggle from './components/ClockModeToggle';
import {Display} from './components/Display';
import SetValue from './components/SetValue';
import React from 'react';
const App = () => {
  const [panelA, setPanelA] = React.useState(0);
  const [panelB, setPanelB] = React.useState(0);
  const [panelC, setPanelC] = React.useState(0);
  const [panelD, setPanelD] = React.useState(0);
  const [clockMode, setClockMode] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  
  const setPanelData = (data) => {
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].PanelID === "1") {
        if(data[i].State.mode==="bcd" || data[i].State.mode==="clock"){
          setPanelA(parseInt(data[i].State.bcd_data.value));
        } else if(data[i].State.mode==="alpha"){
          setPanelA(data[i].State.alpha_data.alpha);
        } else if(data[i].State.mode==="direct"){
          setPanelA(data[i].State.direct_data);
        }
      } else if (data[i].PanelID === "2") {
        if(data[i].State.mode==="bcd" || data[i].State.mode==="clock"){
          setPanelB(parseInt(data[i].State.bcd_data.value));
        } else if(data[i].State.mode==="alpha"){
          setPanelB(data[i].State.alpha_data.alpha);
        } else if(data[i].State.mode==="direct"){
          setPanelB(data[i].State.direct_data);
        }
      } else if (data[i].PanelID === "3") {
        if(data[i].State.mode==="bcd" || data[i].State.mode==="clock"){
          setPanelC(parseInt(data[i].State.bcd_data.value));
        } else if(data[i].State.mode==="alpha"){
          setPanelC(data[i].State.alpha_data.alpha);
        } else if(data[i].State.mode==="direct"){
          setPanelC(data[i].State.direct_data);
        }
      } else if (data[i].PanelID === "4") {
        if(data[i].State.mode==="bcd" || data[i].State.mode==="clock"){
          setPanelD(parseInt(data[i].State.bcd_data.value));
        } else if(data[i].State.mode==="alpha"){
          setPanelD(data[i].State.alpha_data.alpha);
        } else if(data[i].State.mode==="direct"){
          setPanelD(data[i].State.direct_data);
        }
      }
    }
  }
  
  React.useEffect(() => {
    (async () => {
      const interval = setInterval(async () => {
        setLoading(true);
          try{
              
              const response = await fetch ("http://192.168.186.12:9000/panel/status");
              const responseJson = await response.json();
              setPanelData(responseJson);
          } catch (error) {
              console.log(error);
          } finally {
              setLoading(false);
          }
      }, 1000);
      return () => clearInterval(interval);
    })();
  }, []);

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
          <div className="col-span-1"><Display value={panelA} /></div>
          <div className="col-span-1"><Display value={panelB} /></div>
          <div className="col-span-1"><Display value={panelC} /></div>
          <div className="col-span-1"><Display value={panelD} /></div>

          <div className="col-span-1"><SetValue panel={setPanelA} panelID={1}/></div>
          <div className="col-span-1"><SetValue panel={setPanelB} panelID={2}/></div>
          <div className="col-span-1"><SetValue panel={setPanelC} panelID={3}/></div>
          <div className="col-span-1"><SetValue panel={setPanelD} panelID={4}/></div>
          </div>
      </div>
    </div>
  );
}

export default App;
