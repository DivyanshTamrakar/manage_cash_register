import React, { useState } from "react";
import "./styles.css";
let changes = {
  "2000": 0,
  "500": 0,
  "100": 0,
  "20": 0,
  "10": 0,
  "5": 0,
  "2": 0,
  "1": 0
};
const currency = Object.keys(changes).reverse();

export default function App() {
  const [output, setOutput] = useState("none");
  const [bill, setBill] = useState("");
  const [cash, setCash] = useState("");

  function fetchBill(event) {
    setBill(event.target.value);
  }
  function fetchCash(event) {
    setCash(event.target.value);
  }
  function fetchChange(event) {
    let change = cash - bill;
    if (change < 0) {
      alert("Please enter cash value larger than bill Value");
    } else {
      for (var i = 0; i < currency.length; i++) {
        if (currency[i] <= change) {
          let x = Math.floor(change / currency[i]);
          change -= currency[i] * x;
          changes[currency[i]] = x;
        }
      }

      setOutput("block");
    }
  }
  return (
    <div className="App">
      <h1 className="header">Cash Manager App</h1>
      <div>
        <small className="header2">Customer Bill Amount</small>
      </div>
      <input
        placeholder="Enter amount"
        className="bill_field"
        type="number"
        onChange={fetchBill}
      />
      <div>
        <small className="header3">Recieved Amount from User</small>
      </div>
      <input
        placeholder="Enter cash Recieved"
        className="recieved_field"
        type="number"
        onChange={fetchCash}
      />
      <br />
      <button className="button" onClick={fetchChange}>
        Submit
      </button>

      <div className="ouptut">
        <div className="margin-top">
          {currency.map((item) => {
            return (
              <span className="marign" key={item}>
                {item}
              </span>
            );
          })}
        </div>
        <div className="margin-top">
          {currency.map((item) => {
            return (
              <span className="marign2" key={item}>
                .
              </span>
            );
          })}
        </div>
        <div className="margin-top">
          {currency.map((item, index) => {
            return (
              <span className="marign1" key={index}>
                {changes[item]}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
