import './index.css'
import Header from './components/Header.jsx'
import CalculatorForm from './components/CalculatorForm.jsx'
import Result from './components/Result.jsx'
import {calculateInvestmentResults} from './util/investment.js'
import { useState } from 'react'

function App() {
  
  const [investmentResults, setInvestmentResults] = useState([])

  const handleResults = (data)=>{
    setInvestmentResults(prevData =>{
      prevData = calculateInvestmentResults(data);
      console.log(prevData)
      return prevData; 
    })
  }

  return (
  <>
    <Header />
    <CalculatorForm results={handleResults} />
    <Result dataForTable={investmentResults}/>
  </>

  
  )


}

export default App
