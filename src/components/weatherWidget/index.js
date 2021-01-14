import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WeatherWidget = props => {

  const [city, setCity] = useState('dallas')
  const [weatherResponse, setWeatherResponse] = useState(null)

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}`)
    .then(response => console.log(response))
    .catch(function (error) {
      // handle error
      console.log(error)
    })
  },[])

  return (
    <div>weather!</div>
  )
}

export default WeatherWidget
