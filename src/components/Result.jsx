import React from 'react'
import {formatter} from '../util/investment'

const Result = ({dataForTable}) => {

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
            dataForTable.map()
          }
      </tbody>
    </table>
  )
}

export default Result