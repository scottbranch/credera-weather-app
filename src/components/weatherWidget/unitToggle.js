import React from "react"
import styled from "styled-components"

const UnitToggle = props => {
  const { onClick, unit } = props

  return (
    <ButtonContainer
      onClick={onClick}
      unit={unit}
      ariaRole="switch"
      ariaChecked="true"
    >
      <Toggle unit={unit}></Toggle>
      <UnitParagraph unit={unit} className="metric">
        C<Sup>&deg;unit toggle clone</Sup>
      </UnitParagraph>
      <UnitParagraph unit={unit} className="imperial">
        F<Sup>&deg;</Sup>
      </UnitParagraph>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.blueGray};
  border: none;
  border-radius: 13px;
  display: flex;
  height: 27px;
  justify-content: space-between;
  outline: none;
  padding: 3px 7px;
  position: relative;
  width: 55px;

  &:hover {
    cursor: pointer;
  }
`

const Toggle = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  height: 21px;
  position: absolute;
  right: 3px;
  transform: ${({ unit }) =>
    unit === "metric"
      ? "translate3d(-28px, 0px, 0px)"
      : "translate3d(0px, 0px, 0px)"};
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  width: 21px;
  z-index: 50;
`

const UnitParagraph = styled.p`
  border: none;
  font-size: 0.77rem;
  font-weight: 600;
  transition: color 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  z-index: 100;

  &.metric {
    color: ${({ theme, unit }) =>
      unit === "metric" ? theme.colors.darkestBlue : theme.colors.white};
  }

  &.imperial {
    color: ${({ theme, unit }) =>
      unit === "imperial" ? theme.colors.darkestBlue : theme.colors.white};
  }
`

const Sup = styled.sup`
  top: -4px;
`

export default UnitToggle
