import React from "react"
import styled from "styled-components"

const DailyWeatherBlock = props => {
  const { day, iconClass, temp } = props

  return (
    <StyledContainer>
      <DayParagraph>{day}</DayParagraph>
      <WeatherIcon className={iconClass}></WeatherIcon>
      <Temperature>
        {temp}
        <Sup>&deg;</Sup>
      </Temperature>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: block;
  padding: 20px 0 30px;
  text-align: center;
  width: 100%;

  &:last-child {
    border-right: none;
  }
`

const DayParagraph = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 0.77rem;
  font-weight: 700;
`

const WeatherIcon = styled.i`
  color: ${({ theme }) => theme.colors.blueGray};
  font-size: 2.2rem;
  margin: 15px 0;
`

const Temperature = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.35rem;
`

const Sup = styled.sup`
  top: -3px;
`

export default DailyWeatherBlock
