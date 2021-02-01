import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import theme from "../theme"
import "./../css/layout.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}children stuff</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
