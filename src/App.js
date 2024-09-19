import React from "react";
import { useState } from "react";
import './App.css';
import ChargeBank from "./Charge";
// react 
function App() {
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("")
  const [final, setFinal] = useState(0);

  const AddDeposit = () => {
    const amountDeposit = parseInt(deposit);
    if (amountDeposit > 0 && !isNaN(amountDeposit)) {
      setDeposit((preFinal) => preFinal + amountDeposit);
      setDeposit("");
      setFinal(amountDeposit + final)
    }
  }

  const withdrawAmount = () => {
    const retrieveAmount = parseInt(withdraw);
    if (retrieveAmount > 0 && !isNaN(retrieveAmount) && retrieveAmount <= final) {
      setWithdraw((preFinal) => preFinal - retrieveAmount);
      setWithdraw("");
      setFinal(final - retrieveAmount)
    }
  }
  return (
    <div>
      <div>
        <label for='deposit' >deposit money: </label>
        <input type="number" value={deposit} onChange={(event) => setDeposit(event.target.value)} /> {/* An input for the user to deposit money to the
bank   */}
        <button onClick={AddDeposit}>click here</button> {/* click a button that will
add the “deposit” amount to the currently displayed bank balance). */}
        

        <label for='withdraw' >withdraw: </label>
        <input type="number" value={withdraw} onChange={(event) => setWithdraw(event.target.value)} /> {/* An input for the user to deposit money to the
bank   */}
        <button onClick={withdrawAmount}>click here</button>

      </div>
       <ChargeBank final={final}/>
      <div>
      <h3> deposit money :{deposit}</h3>
      <h3>withdraw money : {withdraw}</h3>
      <h1> Total: {final}</h1>
      
      </div>

    </div>

  )

}

export default App;

