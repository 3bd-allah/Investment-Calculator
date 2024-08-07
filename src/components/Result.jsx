import React from 'react'
import {formatter} from '../util/investment.js'

const Result = ({dataForTable}) => {

  console.log(typeof(dataForTable))
  console.log(dataForTable)
  
  return (
    <table id='result'>
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
          {
            dataForTable.map((x,i) => 
              <tr>
                <td>{i+1}</td>
                <td>{formatter.format(x.valueEndOfYear)}</td>
                <td>{formatter.format(x.interest)}</td>
                <td>{formatter.format(x.interest)}</td>
                <td>{formatter.format(x.interest)}</td>
              </tr>
            )
          }
      </tbody>
    </table>
  )
}

export default Result