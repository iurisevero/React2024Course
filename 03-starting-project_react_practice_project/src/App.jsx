import { useState } from "react";

import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function getAnnualData(
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
) {
  let annualData = [];
  if (initialInvestment && annualInvestment && expectedReturn && duration) {
    annualData = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
  }
  return annualData;
}

function App() {
  const [initialInvestment, setInitialInvestment] = useState(null);
  const [annualInvestment, setAnnualInvestment] = useState(null);
  const [expectedReturn, setExpectedReturn] = useState(null);
  const [duration, setDuration] = useState(null);

  function handleChange(updateFunction, updateValue) {
    updateFunction(updateValue);
  }

  const annualData = getAnnualData(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  );

  return (
    <>
      <div className="input-group">
        <UserInput
          title={"Initial Investment"}
          onChange={(updateValue) => {
            handleChange(setInitialInvestment, updateValue);
          }}
        />
        <UserInput
          title={"Annual Investment"}
          onChange={(updateValue) => {
            handleChange(setAnnualInvestment, updateValue);
          }}
        />
        <UserInput
          title={"Expected Return"}
          onChange={(updateValue) => {
            handleChange(setExpectedReturn, updateValue);
          }}
        />
        <UserInput
          title={"Duration"}
          onChange={(updateValue) => {
            handleChange(setDuration, updateValue);
          }}
        />
      </div>
      {console.log("initialInvestment: " + initialInvestment)}
      {console.log("annualInvestment: " + annualInvestment)}
      {console.log("expectedReturn: " + expectedReturn)}
      {console.log("duration: " + duration)}
      {console.log("annual data: " + annualData)}
    </>
  );
}

export default App;
