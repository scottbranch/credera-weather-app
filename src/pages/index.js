import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import WeatherWidget from '../components/weatherWidget'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WeatherWidget/>
  </Layout>
)

export default IndexPage
