import React, { useState } from "react";
import './Terminal.css';

function App() {
  const [output, setOutput] = useState([]);

  function handleInputKeyDown(event) {
    if (event.key === "Enter") {
      const input = event.target.value;
      if(input === "hi"){
        setOutput([...output, {value: "hello!"}]);
      }
      else if(input === "aboutme"){
        setOutput([...output, {value: "Hi im ria, 2nd year CS at MEC.\n Pick me bc im v cool and cute and i really like IEEE pwease <3"}]);
      }
      else{
        setOutput([...output, { type: "input", value: input }]);
      }
     
     
      
      event.target.value = "";
    }
  }
  return (
    <>
     <div className="terminal">
      <div className="output">
        {output.map((item, index) => (
          <div key={index} className={item.type}>
            {item.value}
          </div>
        ))}
      </div>
      <div className="oneline">
      <label for="input" className="terminalname">starcatria@faketerminal:~$</label>
      <input
        className="input"
        type="text"
        id = "input"
        onKeyDown={handleInputKeyDown}
      />
      </div>
      
    </div>
  </>
  );
}

export default App;


// starcatria@faketerminal: ~$