import React from "react";
import { useState } from "react";

function ChargeBank(final) {
    const [charge, setCharge] = useState("");
    const chargeRate = final - final / 10
    return (
        <div>
            {/* charge rate of the bank*/}
            <h1>Charge bank: {chargeRate}</h1>
            <label for="charge bank">charge bank</label>
            <input type="number" placeholder="Enter 10% charge bank" />
            <button onclick="ChargeBank()">Add Interest</button>
        </div>
    );


}

export default ChargeBank;

