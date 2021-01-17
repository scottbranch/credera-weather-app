import React from "react"
import styled from "styled-components"

const DailyWeatherBlock = props => {
  const { day, description, iconClass, temp } = props

  return (
    <StyledContainer>
      <p>{day}</p>
      <i className={iconClass}></i>
      <p>
        {temp}
        <sup>&deg;</sup>
      </p>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: block;
`

export default DailyWeatherBlock
