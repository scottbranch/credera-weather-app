import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

import CurrentWeatherBlock from "./currentWeatherBlock"
import DailyWeatherBlock from "./dailyWeatherBlock"

import { weatherIcons } from "./iconMap"

const WeatherWidget = props => {
  const [city, setCity] = useState("dallas")
  const [unit, setUnit] = useState("imperial")
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
        console.log(error)
      })

    let dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    let today = new Date()

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    console.log(today.toLocaleDateString("en-US", dateOptions))
    console.log(weekDays[today.getDay() + 1])
  }, [])

  return (
    <>
      <CurrentWeatherBlock
        temp={weatherResponse?.current?.temp}
        iconClass={`wi wi-${
          weatherIcons[weatherResponse?.current?.weather[0]?.id]?.icon
        }`}
        description={weatherResponse?.current?.weather[0].description}
        windSpeed={weatherResponse?.current?.wind_speed}
      ></CurrentWeatherBlock>

      <WeatherBlockContainer>
        {weatherResponse?.daily?.slice(1, 6).map((item, index) => {
          let iconId = item.weather[0].id

          return (
            <DailyWeatherBlock
              iconClass={`wi wi-${weatherIcons[iconId]?.icon}`}
              key={index}
              temp={item.temp.max}
              description={item.weather[0].description}
            />
          )
        })}
      </WeatherBlockContainer>
    </>
  )
}

const WeatherBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default WeatherWidget
