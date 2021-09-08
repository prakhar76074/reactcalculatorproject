

import React, { useState } from 'react'
import './App.css'








const App = () => {
  
 const [ques, setQues]=useState("");
  const [result, setResult] = useState("");
  const Click = (e) => {
    setResult(result.concat(e.target.name));
  }
  // it clear both the ques and result
  const clear=()=>{
    setQues("");
    setResult("");
  }
  // it remove one digit from right side
  const back=()=>{
    setResult(result.slice(0,result.length-1));
  }
  const calculate=(e)=>{

    try{
      setQues(result.concat(e.target.name + " = "))
      setResult(eval(result).toString())
    }
    
    catch(error){
      setResult("Error ")
    }
    
  }
  
 
  
  return (
    <>
      <h1>CALCULATOR</h1>
  
    
    
      <div className="container">
        <form>
          <p style={{color:"#fff" , textAlign:"right" , margin:"10px 0px 0px 0px"} }>{ques} </p>
          <input type="text" value={result} />

        </form>
        <div className="keypad">

          <button className="bg" onClick={clear} id="clear">C</button>
          <button className="bg" onClick={back} id="back">&#x2716;</button>
          <button className="bg" name="/" onClick={Click}>&divide;</button>
          <button name="7" onClick={Click}>7</button>
          <button name="8" onClick={Click}>8</button>
          <button name="9" onClick={Click}>9</button>
          <button className="bg" name="*" onClick={Click}>&times;</button>
          <button name="4" onClick={Click}>4</button>
          <button name="5" onClick={Click}>5</button>
          <button name="6" onClick={Click}>6 </button>
          <button className="bg" name="-" onClick={Click}>&ndash;</button>
          <button name="1" onClick={Click}>1</button>
          <button name="2" onClick={Click}>2</button>
          <button name="3" onClick={Click}>3</button>
          <button className="bg" name="+" onClick={Click}>+</button>
          <button name="." onClick={Click}>.</button>
          <button  name="0" onClick={Click}>0</button>
          <button onClick={Click} onClick={calculate} className="result">ENTER</button>
          <button name="(" onClick={Click}>(</button>
          <button name=")" onClick={Click}>)</button>
         



        </div>
      </div>
     
    
</>
  
  )

}


export default App;

