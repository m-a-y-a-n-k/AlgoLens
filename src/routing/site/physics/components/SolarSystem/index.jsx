import React from "react"
import { PlanetProvider } from "./PlanetContext"
import SolarSystemCanvas from "./SolarSystemCanvas"
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
`

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  padding: 20px;
  text-align: center;
  color: #fbac61;
`

const App = () => {
  return (
    <PlanetProvider>
      <AppContainer>
        <Title>Solar System Planetary Motion</Title>
        <SolarSystemCanvas />
      </AppContainer>
    </PlanetProvider>
  )
}

export default App
