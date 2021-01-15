import React, { useEffect, useState } from "react"
import axios from "axios"

import WeatherBlock from "./weatherBlock"

import { weatherIcons } from "./iconMap"

const WeatherWidget = props => {
  const [city, setCity] = useState("dallas")
  const [unit, setUnit] = useState("imperial")
  const [icons, setIcons] = useState([])
  const [weatherResponse, setWeatherResponse] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=32.7668&lon=-96.7836&units=${unit}&exclude=minutely,hourly&appid=${process.env.GATSBY_WEATHER_API_KEY}`
      )
      .then(response => {
        setWeatherResponse(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  return (
    <>
      <div>weather!</div>
      {weatherResponse.daily?.map((item, index) => {
        let iconId = item.weather[0].id

        return (
          <WeatherBlock
            iconClass={`wi wi-${weatherIcons[iconId].icon}`}
            key={index}
            title={item.weather[0].description}
          />
        )
      })}
    </>
  )
}

export default WeatherWidget
