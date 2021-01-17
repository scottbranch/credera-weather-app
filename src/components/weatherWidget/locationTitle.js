import React, { useEffect, useState } from "react"
import LocationPin from "../../assets/svg/locationPin"
import styled from "styled-components"

const LocationTitle = props => {
  const [today, setToday] = useState("")

  useEffect(() => {
    let dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    let currentDate = new Date()

    setToday(currentDate.toLocaleDateString("en-US", dateOptions))
  }, [])

  return (
    <TitleContainer>
      <CityParagraph>
        <StyledLocationPin />
        Dallas, TX
      </CityParagraph>
      <DateParagraph>{today}</DateParagraph>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`

const CityParagraph = styled.p`
  font-weight: 600;
  margin-bottom: 7px;
`

const DateParagraph = styled.p`
  font-size: 0.78rem;
  margin-bottom: 25px;
`

const StyledLocationPin = styled(LocationPin)`
  margin-right: 6px;
`

export default LocationTitle
