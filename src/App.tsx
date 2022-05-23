import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Container from './components/index'
import Header from "./components/header"
import Nav from "./components/navigation"

const App: React.FC =() => {
  return(
    <ThemeProvider theme={theme}>
      <Header />
      <main className="main">
        <Nav/>
        <Container />
      </main>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
