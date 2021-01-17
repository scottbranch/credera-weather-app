import React, { useEffect, useState } from "react"
import axios from "axios"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import CurrentWeatherBlock from "./currentWeatherBlock"
import DailyWeatherBlock from "./dailyWeatherBlock"
import LocationTitle from "./locationTitle"
import UnitToggle from "./unitToggle"
import Spinner from "./spinner"

import { weatherIcons } from "./iconMap"
import cloud1 from "../../images/cloud1.png"
import cloud2 from "../../images/cloud2.png"

const WeatherWidget = props => {
  const [city] = useState("Dallas, TX")
  const [unit, setUnit] = useState("imperial")
  const [isToggling, setIsToggling] = useState(false)
  const [today] = useState(new Date())
  const [weekDays] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
  const [isLoading, setIsLoading] = useState(true)
  const [weatherResponse, setWeatherResponse] = useState([])

  useEffect(() => {
    isToggling && setIsLoading(false)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=32.7668&lon=-96.7836&units=${unit}&exclude=minutely,hourly&appid=${process.env.GATSBY_WEATHER_API_KEY}`
      )
      .then(response => {
        setWeatherResponse(response.data)
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [unit])

  const toggleUnit = () => {
    setIsToggling(true)
    setUnit(unit === "imperial" ? "metric" : "imperial")
  }

  const data = useStaticQuery(graphql`
    query {
      dallas: file(relativePath: { eq: "dallas.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <WidgetContainer>
      <Cloud1 src={cloud1} />
      <Cloud2 src={cloud2} />

      <LocationTitle city={city} />

      <WeatherContainer>
        <WeatherHeader>
          <WeatherHeaderInner>
            {isLoading ? (
              <Spinner size="47px" />
            ) : (
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
            )}

            <UnitToggle unit={unit} onClick={toggleUnit} />
          </WeatherHeaderInner>
          <DallasImgContainer>
            <DallasImg fluid={data["dallas"].childImageSharp.fluid} />
          </DallasImgContainer>
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

const floatcloud = (elementWidth, topValue) => keyframes`
  0% {
    transform: translate3d(calc(0vw - ${elementWidth}), ${topValue}, 0);
  }

  100% {
    transform: translate3d(100vw, ${topValue}, 0);
  }
`

const WidgetContainer = styled.div`
  max-width: 670px;
  padding: 25px 0 40px;
  width: 100%;
`

const Cloud1 = styled.img`
  animation: ${floatcloud("210px", "135px")} 40s linear infinite;
  animation-delay: -25s;
  left: 0;
  max-width: 210px;
  position: absolute;
  transform: translate3d(-100%, 135px, 0);
  z-index: 150;
`

const Cloud2 = styled.img`
  animation: ${floatcloud("145px", "220px")} 45s linear infinite;
  animation-delay: -10s;
  left: 0;
  max-width: 145px;
  position: absolute;
  transform: translate3d(-100%, 220px, 0);
  z-index: 150;
`

const WeatherContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
`

const WeatherHeader = styled.div`
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  height: 370px;
  position: relative;
`

const DallasImgContainer = styled.div`
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`

const DallasImg = styled(Img)`
  height: 100%;
  object-fit: contain;
  width: 100%;
`

const WeatherHeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  padding: 15px 20px 0 30px;
`

const WeatherBlockContainer = styled.div`
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  min-height: 156px;
`

export default WeatherWidget
