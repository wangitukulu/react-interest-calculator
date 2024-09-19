import React from "react";
import { useState } from "react";
import './App.css';

function App() {
  const[deposit, setDeposit] = useState("");
  const[final, setFinal] = useState(0);

const AddDeposit= ()=>{
  const amountDeposit = parseInt(deposit);
  if(amountDeposit >0 && !isNaN(amountDeposit)){
     setDeposit((preFinal)=> preFinal + amountDeposit); 
     setDeposit("");
  }
}
  return (
    <div>
     <label for='deposit' >deposit money: </label>
      <input type="number" value={deposit} onChange={(event) => setDeposit(event.target.value)}  /> {/* An input for the user to deposit money to the
bank   */}
      <button onClick={AddDeposit}>click here</button> {/* click a button that will
add the “deposit” amount to the currently displayed bank balance). */}
      <h3> deposit money : {deposit}</h3> 
      <h1> After adding : {final}</h1>

    
    </div>
    
  )
 
}

export default App;

