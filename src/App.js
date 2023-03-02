import React, { useState } from "react";
import './Terminal.css';

function App() {
  const [Input1, setInput1] = useState("");
  const [output, setOutput] = useState([]);
  // const inputRef = useRef(null);


  function handleInputKeyDown(event) {
    if (event.key === "Enter") {
      // event.preventDefault();
      const input = event.target.value;
      if(input === "hi"){
        // setInput1(input);
        setOutput([...output, {type: "text" , value: "hello!"}]);
      }
      else if(input === "aboutme"){
        setOutput([...output, {type: "text", value: "Hi im ria, 2nd year CS at MEC.Pick me bc im v cool and cute and i really like IEEE pwease <3"}]);
      }
      else if(input === "help"){
        setOutput([...output, {type: "text", value: "commands: hi, aboutme, clear, redirect"}])
      }
      else if(input === "clear"){
        setOutput([]);
      }
      else{
        let words = input.split(' ');
        let firstWord = words[0];
        if(firstWord === "redirect"){
          // let url = decodeURIComponent(words[1]);
          // window.open(url, "_blank");
          // window.location.replace("www.google.com");
          // var url = "http://google.com";
          // $(location).attr('href', url)
          var url = words[1];
          console.log(url);
          window.open(url, "_blank");

        }
        else{

        }
      }
     
     
      
      event.target.value = "";
      // setInput1("");
    }
  }
  return (
    <>
     <div className="terminal">
      
      <div className="oneline">
      <label for="input" className="terminalname">starcatria@faketerminal:~$</label>
      <input
        className="input"
        type="text"
        id = "input"
        onKeyDown={handleInputKeyDown}
      />
      <p></p>
      </div>

      {/* <div>
      <label for="input" className="terminalname">starcatria@faketerminal:~$</label>
      {Input1}
      </div> */}

      <div className="output">
        {output.map((item, index) => (
          <div key={index} className={item.type}>
            <label for="input" className="terminalname">starcatria@faketerminal:~$</label>
            {item.value}
          </div>
        ))}
      </div>
      
    </div>
  </>
  );
}

export default App;


// starcatria@faketerminal: ~$