import React from "react";

const ClockModeToggle = () => {
    const [enabled, setEnabled] = React.useState(true); // default value is true
    const toggle = () => {
        setEnabled(!enabled);
        console.log(enabled);
    };

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