import React from "react"
import styled, { keyframes } from "styled-components"

const Spinner = props => {
  const { size } = props

  return <LoaderContainer size={size}>this is the og adding clone line</LoaderContainer>
}

const spinner = keyframes`
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
`

const LoaderContainer = styled.div`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border: ${({ theme }) => `2px solid ${theme.colors.blueGray}`};
  border-bottom-color: transparent;
  animation: 700ms linear infinite ${spinner};
`

export default Spinner
