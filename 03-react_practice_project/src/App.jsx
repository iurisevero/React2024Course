import { useState } from "react";

import UserInputGroup from "./components/UserInputGroup";
import InvestmentResult from "./components/InvestmentResult";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // + converts the string to number
      };
    });
  }

  return (
    <>
      <UserInputGroup userInput={userInput} onChange={handleChange} />
      {console.log("initialInvestment: " + userInput.initialInvestment)}
      {console.log("annualInvestment: " + userInput.annualInvestment)}
      {console.log("expectedReturn: " + userInput.expectedReturn)}
      {console.log("duration: " + userInput.duration)}
      {!inputIsValid && (
        <p className="center">Please enter a duratin greater than zero</p>
      )}
      {inputIsValid && <InvestmentResult input={userInput} />}
    </>
  );
}

export default App;
