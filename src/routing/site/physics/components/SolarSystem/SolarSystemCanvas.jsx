import React, { useRef, useEffect, useState } from "react"
import { usePlanets } from "./PlanetContext"
import styled from "styled-components"

// Styled-components
const Canvas = styled.canvas`
  width: 100%;
  height: auto;
  max-width: 600px;
  border: 2px solid #fff;
  background-color: #000;
  display: block;
  margin: 0 auto;
`

const TimeElapsed = styled.div`
  color: #fff;
  text-align: center;
  margin: 10px;
  font-size: 1.2em;
`

const SolarSystemCanvas = () => {
  const { planets, setPlanets } = usePlanets()
  const canvasRef = useRef(null)
  const [elapsedDays, setElapsedDays] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      planets.forEach((planet) => {
        // Draw orbit
        ctx.beginPath()
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          planet.distance,
          0,
          2 * Math.PI
        )
        ctx.strokeStyle = "#FFFFFF"
        ctx.stroke()
        ctx.closePath()

        // Draw Planet
        const x = canvas.width / 2 + planet.distance * Math.cos(planet.angle)
        const y = canvas.height / 2 + planet.distance * Math.sin(planet.angle)

        ctx.beginPath()
        ctx.arc(x, y, planet.radius, 0, 2 * Math.PI)
        ctx.fillStyle = planet.fillColor
        ctx.fill()
        ctx.closePath()

        // Draw planet label
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "10px Arial"
        ctx.fillText(planet.name, x + planet.radius + 2, y)
      })

      setTimeout(() => {
        setPlanets(
          planets.map((planet) => ({
            ...planet,
            angle: planet.angle + (planet.speed * Math.PI) / 180,
          }))
        )
      }, 50)
    }

    const animate = () => {
      render()
      setElapsedDays((prevDays) => prevDays + 1)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [planets, setPlanets])

  return (
    <>
      <Canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="solar-system-canvas"
      />
      <TimeElapsed>Time Elapsed: {elapsedDays} Earth days</TimeElapsed>
    </>
  )
}

export default SolarSystemCanvas
