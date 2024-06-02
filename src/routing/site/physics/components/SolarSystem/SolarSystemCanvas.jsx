import React, { useRef, useEffect, useState } from "react"
import { usePlanets } from "./PlanetContext"
import "./SolarSystemCanvas.css"

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
    // Increment elapsed days based on Earth's speed (assuming 1 day per frame for simplicity)
    setElapsedDays((prevDays) => prevDays + 1)
    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [planets, setPlanets])

  return (
    <>
      <canvas
        ref={canvasRef}
        width="800"
        height="800"
        className="solar-system-canvas"
      />
      <div className="time-elapsed">Time Elapsed: {elapsedDays} Earth days</div>
    </>
  )
}

export default SolarSystemCanvas
