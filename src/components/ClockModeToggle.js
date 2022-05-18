import React from "react";
const APIEnableClockMode = () => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch('http://192.168.186.12:9000/clock/enable', requestOptions)
}

const APIDisableClockMode = () => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch('http://192.168.186.12:9000/clock/disable', requestOptions)
}


const ClockModeToggle = () => {
    const [enabled, setEnabled] = React.useState(false); 
    const toggle = () => {
        setEnabled(!enabled);
        if (!enabled) {
            APIEnableClockMode();
        } else {
            APIDisableClockMode();
        }

        console.log(enabled);
    };
    
    React.useEffect(() => {
        (async () => {
              try{
                  
                  const response = await fetch ("http://192.168.186.12:9000/clock/isenabled");
                  const responseJson = await response.json();
                  setEnabled(responseJson.clock_mode)
              } catch (error) {
                  console.log(error);
              }
        })();
      }, []);

  return (
    <div className="flex justify-center px-4 py-4">
        <div className="form-check form-switch">
            <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggle} />
            <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">Clock Mode</label>
    </div>
</div>
    );
}

export default ClockModeToggle;