import React from "react"
import { PlanetProvider } from "./PlanetContext"
import SolarSystemCanvas from "./SolarSystemCanvas"

const App = () => {
  return (
    <PlanetProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Solar System Planetary Motion</h1>
        <SolarSystemCanvas />
      </div>
    </PlanetProvider>
  )
}

export default App
