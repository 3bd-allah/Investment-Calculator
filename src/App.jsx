import './index.css'
import Header from './components/Header.jsx'
import CalculatorForm from './components/CalculatorForm.jsx'
import Result from './components/Result.jsx'
import { useState } from 'react'

function App() {
  
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const isDurationValid = investmentData.duration > 0 ;
  
  const handleChange = (inputIdentifier, newValue)=>{
    setInvestmentData(prevData => ({
      ...prevData, 
      [inputIdentifier]: +newValue
    }))
  }


  return (
  <>
    <Header />
    <CalculatorForm userInput={investmentData} onChange= {handleChange} />
    {isDurationValid? <Result data={investmentData}/> : <p className='center'>Enter duration greater than zero.</p>}
  </>

  
  )


}

export default App
