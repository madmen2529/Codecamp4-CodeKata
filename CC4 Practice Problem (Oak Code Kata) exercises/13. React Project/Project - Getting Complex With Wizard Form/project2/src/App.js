import React from "react";
import "./App.css";
// import MasterForm from "./MasterForm";

function App() {
  return (
    <div>
      <Step1 currentStep={1} />
    </div>
  );
}

///* <MasterForm Step1={Step1} /> */

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email} // props from parent
        onChange={props.handleChange} // props from parent
      />
    </div>
  );
}

export default App;
