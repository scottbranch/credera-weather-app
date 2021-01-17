import React from "react"
import styled from "styled-components"

const CurrentWeatherBlock = props => {
  const { description, iconClass, temp, windSpeed } = props

  return (
    <WeatherContainer>
      <Temperature>
        {temp}
        <Sup>&deg;</Sup>
      </Temperature>
      <Icon className={iconClass}></Icon>
      <WeatherDescriptionContainer>
        <WeatherDescription>{description}</WeatherDescription>
        <WeatherDescription>{windSpeed}</WeatherDescription>
      </WeatherDescriptionContainer>
    </WeatherContainer>
  )
}

const WeatherContainer = styled.div`
  color: ${({ theme }) => theme.colors.blueGray};
  display: flex;
`

const Temperature = styled.p`
  font-size: 2.65rem;
`

const Sup = styled.sup`
  position: relative;
  top: -7px;
`

const Icon = styled.i`
  font-size: 2.3rem;
  position: relative;
  top: 4px;
`

const WeatherDescriptionContainer = styled.div`
  position: relative;
  margin-left: 15px;
  top: 10px;
`

const WeatherDescription = styled.p`
  font-size: 0.77rem;
  font-weight: 600;

  &:last-child {
    margin-top: 5px;
  }
`

export default CurrentWeatherBlock
