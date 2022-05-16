import React from "react";
import './Display.css';


const numbers = [
    0x7E,
    0x30,
    0x6D,
    0x79,
    0x33,
    0x5B,
    0x5F,
    0x70,
    0x7F,
    0x7B
]

const letters = {
  "A": 0x77,
  "a": 0x7D,
  "b": 0x1F,
  "C": 0x4E,
  "c": 0x0D,
  "d": 0x3D,
  "E": 0x4F,
  "F": 0x47,
  "G": 0x5E,
  "H": 0x37,
  "h": 0x17,
  "I": 0x06,
  "J": 0x3C,
  "L": 0x0E,
  "n": 0x15,
  "O": 0x7E,
  "o": 0x1D,
  "P": 0x67,
  "q": 0x73,
  "r": 0x05,
  "S": 0x5B,
  "t": 0x0F,
  "U": 0x3E,
  "u": 0x1C,
  "y": 0x3B,
}

const ConvertObjectToBits = (obj) => {
  let bits = 0;
  bits += parseInt(obj.g) ? 1 : 0;
  bits += parseInt(obj.f) ? 2 : 0;
  bits += parseInt(obj.e) ? 4 : 0;
  bits += parseInt(obj.d) ? 8 : 0;
  bits += parseInt(obj.c) ? 16 : 0;
  bits += parseInt(obj.b) ? 32 : 0;
  bits += parseInt(obj.a) ? 64 : 0;
  return bits;
}


const Colon = (props) => {
  return (
    <div className={`Colon ${props.blink ? 'Colon--blink' : ''}`} />
  )
}

const Segment = (props) => {
  return (
    <div className={`Segment Segment-${props.position} ${props.on ? 'Segment--on' : ''}`}></div>
  )
}

const Display = (props) => {
  const segments = ["G","F","E","D","C","B","A"]
  var bit;
  if (typeof(props.value) === 'number') {
    bit = numbers[props.value]
  } else if (typeof(props.value) === 'string') {
    bit = letters[props.value]
  } else if (typeof(props.value) === 'object') {
    bit = ConvertObjectToBits(props.value)
  }

  return (
    <div className="Display bg-black rounded">
      {segments.map((seg, i) => {
        return (<Segment on={((bit >> i) & 1) === 1 ? true : false} position={seg} key={i}/>)
      })}
    </div>
  )
}

export {Display, Colon, Segment, letters};



