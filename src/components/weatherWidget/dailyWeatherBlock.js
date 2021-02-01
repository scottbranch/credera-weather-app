import React from "react"
import styled from "styled-components"

const DailyWeatherBlock = props => {
  const { day, iconClass, temp } = props

  return (
    <StyledContainer>
      <DayParagraph>{day}</DayParagraph>
      <WeatherIcon className={iconClass}></WeatherIcon>
      <Temperature>
        {temp}temperature og
        <Sup>&deg;</Sup>
      </Temperature>
      testing clone
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: block;
  padding: 20px 0;
  text-align: center;
  width: 100%;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakPoints.extraSmall}) {
    padding: 20px 0 30px;
  }

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
  margin: 5px 0 15px;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakPoints.extraSmall}) {
    margin: 15px 0;
  }
`

const Temperature = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.35rem;
`

const Sup = styled.sup`
  top: -3px;
`

export default DailyWeatherBlock
