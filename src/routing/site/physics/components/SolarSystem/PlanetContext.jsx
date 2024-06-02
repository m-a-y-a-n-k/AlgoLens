import React, { createContext, useState, useContext } from "react"

const PlanetContext = createContext()

export const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([
    {
      name: "Sun",
      radius: 20,
      distance: 0,
      speed: 0,
      angle: 0,
      fillColor: "orange",
    },
    {
      name: "Mercury",
      radius: 5,
      distance: 50,
      speed: 1.59,
      angle: 0,
      fillColor: "darkred",
    },
    {
      name: "Venus",
      radius: 6,
      distance: 70,
      speed: 1.2,
      angle: 0,
      fillColor: "forestgreen",
    },
    {
      name: "Earth",
      radius: 8,
      distance: 100,
      speed: 1,
      angle: 0,
      fillColor: "aqua",
    },
    {
      name: "Mars",
      radius: 7,
      distance: 150,
      speed: 0.8,
      angle: 0,
      fillColor: "gold",
    },
    {
      name: "Jupiter",
      radius: 12,
      distance: 200,
      speed: 0.38,
      angle: 0,
      fillColor: "pink",
    },
    {
      name: "Saturn",
      radius: 10,
      distance: 250,
      speed: 0.32,
      angle: 0,
      fillColor: "wheat",
    },
    {
      name: "Uranus",
      radius: 9,
      distance: 300,
      speed: 0.23,
      angle: 0,
      fillColor: "violet",
    },
    {
      name: "Neptune",
      radius: 9,
      distance: 350,
      speed: 0.18,
      angle: 0,
      fillColor: "navy",
    },
  ])

  return (
    <PlanetContext.Provider value={{ planets, setPlanets }}>
      {children}
    </PlanetContext.Provider>
  )
}

export const usePlanets = () => useContext(PlanetContext)
