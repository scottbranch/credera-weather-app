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
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.small}) {
    align-items: center;
  }
`

export default IndexPage
