import React from "react";

import {letters} from "./Display";


const SetValue = (props) => {
    // const [chosen, setChosen] = React.useState(null); // default value is null
    const valid_letters = Object.keys(letters);
    const valid_numbers = ['0','1','2','3','4','5','6','7','8','9'];
    const valid_values = [...valid_numbers, ...valid_letters];
    const selector = (e) => {
        console.log(typeof(e.target.value));
        // setChosen(e.target.value);
        if (valid_numbers.includes(e.target.value)) {
            props.panel(parseInt(e.target.value));
            // call api to set digit in numeric mode
        } else {
            props.panel(e.target.value);
            // call api to set digit in alpha mode
        }
    }
    return (
        <div className="flex justify-center px-4 py-4">
            <select name="selectList" id="selectList"  onChange={selector}>
                {valid_values.map(value => (
                    <option key={value} value={value} >{value}</option>
                ))}
            
            </select>
        </div>
    );
};

export default SetValue;
