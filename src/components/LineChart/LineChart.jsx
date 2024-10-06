<<<<<<< HEAD
import React, { useEffect } from 'react'
import './LineChart.css'
import Chart from 'react-google-charts'
import { useState } from 'react'

const LineChart = ({historicalData}) => {
    const [chartData,setChartData] = useState([["Date","Prices"]])

    useEffect(() => {
      let dataCopy = [["Date","Prices"]]
      if(historicalData.prices) {
        historicalData.prices.map((item) => (
          dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        ))
        setChartData(dataCopy)
      }
    },[historicalData])
  return (
    <Chart 
      chartType='LineChart'
      data={chartData}
      height="100%"
      legendToggle
    />
  )
}

=======
import React, { useEffect } from 'react'
import './LineChart.css'
import Chart from 'react-google-charts'
import { useState } from 'react'

const LineChart = ({historicalData}) => {
    const [chartData,setChartData] = useState([["Date","Prices"]])

    useEffect(() => {
      let dataCopy = [["Date","Prices"]]
      if(historicalData.prices) {
        historicalData.prices.map((item) => (
          dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        ))
        setChartData(dataCopy)
      }
    },[historicalData])
  return (
    <Chart 
      chartType='LineChart'
      data={chartData}
      height="100%"
      legendToggle
    />
  )
}

>>>>>>> 6245303 (final commit)
export default LineChart