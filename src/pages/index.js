import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./../css/weatherIcons.css"

import WeatherWidget from "../components/weatherWidget"

const IndexPage = () => (
  <Layout>
    <HomepageContainer>
      <SEO title="Home" />
      <WeatherWidget />
    </HomepageContainer>
  </Layout>
)

const HomepageContainer = styled.div`
  align-items: baseline;
  background: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.colors.darkBlue}, ${theme.colors.lightBlue})`};
  display: flex;
  justify-content: center;
  height: ${window !== undefined && `${window.innerHeight}px`};
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.small}) {
    height: 100vh;
    min-height: 655px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakPoints.extraSmall}) and (min-height: 645px) {
    align-items: center;
    height: 100vh;
  }
`

export default IndexPage
