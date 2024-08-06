import React, { useState } from "react";

const CalculatorForm = ({results}) => {

  
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  
  return (
    <>
      <div id="user-input" className="input-group">
        <div>
          <label>Initial investment</label>
          <input type="number" 
            value={investmentData.initialInvestment} 
            onChange={(e)=> {
              setInvestmentData(prevData => ({...prevData, initialInvestment:+e.target.value}));
              results(investmentData)
            }}
          />
        </div>

        <div>
          <label>Annual investment</label>
          <input type="number" 
            value={investmentData.annualInvestment} 
            onChange={(e)=> {
              setInvestmentData(prevData => ({...prevData, annualInvestment:+e.target.value}));
              results(investmentData)
            }}
          />
        </div>

        <div>
          <label>Expected Return</label>
          <input type="number" 
            value={investmentData.expectedReturn} 
            onChange={(e)=> {
              setInvestmentData(prevData => ({...prevData, expectedReturn:+e.target.value}));
              results(investmentData)
            }}
          />
        </div>

        <div>
          <label>Duration</label>
          <input type="number" 
            value={investmentData.duration} 
            onChange={(e)=> {
              setInvestmentData(prevData => ({...prevData, duration:+e.target.value}));
              results(investmentData)
              }}
          />
        </div>
      </div>
    </>
  );
};

export default CalculatorForm;
