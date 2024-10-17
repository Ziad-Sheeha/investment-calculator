import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
      const [userInput, setUserInput] = useState({
            initialInvestment: 10000,
            annualInvestment: 1200,
            expectedReturn: 6,
            duration: 10,
      });

      const inputIsValid = userInput.duration >= 1;

      // GENERIC FUNCTION FOR ALL 4 INPUTS
      function handleChange(inputIndentifier, newValue) {
            setUserInput((prevUserInput) => {
                  return {
                        ...prevUserInput,
                        [inputIndentifier]: +newValue,
                  };
            });
      }

      return (
            <>
                  <Header />
                  <UserInput onChangeInput={handleChange} userInput={userInput} />
                  {!inputIsValid && (
                        <p className="center">
                              Please enter a{" "}
                              <strong>
                                    <mark>duration</mark>
                              </strong>{" "}
                              greater than zero.
                        </p>
                  )}
                  {inputIsValid && <Results userInput={userInput} />}
            </>
      );
}

export default App;
