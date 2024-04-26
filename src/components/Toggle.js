import React, {useState} from "react";

function Toggle() {

  const[isOn, setIsOn] =useState(false);

  function handleClick(){
    setIsOn((isOn)=> !isOn)
  }

  const color = isOn ? "silver" : "blue";

  return (
   <div>
     <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON":"OFF"}
     </button>;
    </div>
    )};

export default Toggle;
