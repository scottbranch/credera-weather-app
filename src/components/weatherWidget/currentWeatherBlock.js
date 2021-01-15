import React from "react"
import styled from "styled-components"

const CurrentWeatherBlock = props => {
  const { description, iconClass, temp, windSpeed } = props

  return (
    <WeatherContainer>
      <p>{temp}</p>
      <i className={iconClass}></i>
      <div>
        <p>{description}</p>
        <p>{windSpeed}</p>
      </div>
    </WeatherContainer>
  )
}

const WeatherContainer = styled.div`
  display: flex;
`

export default CurrentWeatherBlock
