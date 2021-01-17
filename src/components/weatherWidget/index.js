import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

import CurrentWeatherBlock from "./currentWeatherBlock"
import DailyWeatherBlock from "./dailyWeatherBlock"
import LocationTitle from "./locationTitle"
import UnitToggle from "./unitToggle"

import { weatherIcons } from "./iconMap"
import dallas from "../../images/dallas.jpg"

const WeatherWidget = props => {
  const [city, setCity] = useState("dallas")
  const [unit, setUnit] = useState("imperial")
  const [today] = useState(new Date())
  const [weekDays] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
  const [weatherResponse, setWeatherResponse] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=32.7668&lon=-96.7836&units=${unit}&exclude=minutely,hourly&appid=${process.env.GATSBY_WEATHER_API_KEY}`
      )
      .then(response => {
        setWeatherResponse(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [unit])

  const toggleUnit = () => {
    setUnit(unit === "imperial" ? "metric" : "imperial")
  }

  return (
    <WidgetContainer>
      <LocationTitle />

      <WeatherContainer>
        <WeatherHeader>
          <WeatherHeaderInner>
            <CurrentWeatherBlock
              temp={Math.round(weatherResponse?.current?.temp)}
              iconClass={`wi wi-${
                weatherIcons[weatherResponse?.current?.weather[0]?.id]?.icon
              }`}
              description={weatherResponse?.current?.weather[0].description}
              windSpeed={`${Math.round(
                weatherResponse?.current?.wind_speed
              )} mph`}
            ></CurrentWeatherBlock>

            <UnitToggle unit={unit} onClick={toggleUnit} />
          </WeatherHeaderInner>
        </WeatherHeader>

        <WeatherBlockContainer>
          {weatherResponse?.daily?.slice(1, 6).map((item, index) => {
            let iconId = item.weather[0].id
            let currentWeekday = weekDays[(today.getDay() + 1 + index) % 7]

            return (
              <DailyWeatherBlock
                day={currentWeekday}
                iconClass={`wi wi-${weatherIcons[iconId]?.icon}`}
                key={currentWeekday}
                temp={Math.round(item.temp.max)}
              />
            )
          })}
        </WeatherBlockContainer>
      </WeatherContainer>
    </WidgetContainer>
  )
}

const WidgetContainer = styled.div`
  width: 100%;
  max-width: 670px;
`

const WeatherContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
`

const WeatherHeader = styled.div`
  background: url(${dallas}) 0 0;
  background-size: cover;
  height: 370px;
  position: relative;
`

const WeatherHeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  padding: 15px 20px 0 45px;
`

const WeatherBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
`

export default WeatherWidget
