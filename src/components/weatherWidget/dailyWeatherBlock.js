import React from "react"
import styled from "styled-components"

const DailyWeatherBlock = props => {
  const { description, iconClass, temp } = props

  return (
    <StyledContainer>
      <p>Sun</p>
      <i className={iconClass}></i>
      <p>
        {temp}
        <sup>&deg;</sup>
      </p>
      <p>{description}</p>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: block;
`

export default DailyWeatherBlock
