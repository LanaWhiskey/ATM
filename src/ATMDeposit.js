import React from "react";

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input min="1" placeholder="Please enter amount" id="number-input" type="number" width="200" onChange={onChange}></input>
        <button type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input">Sumbit</button>
      </label>
    );
  };

  export default ATMDeposit;