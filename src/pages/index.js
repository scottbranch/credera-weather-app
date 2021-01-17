import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
  align-items: center;
  background: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.colors.darkBlue}, ${theme.colors.lightBlue})`};
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

export default IndexPage
