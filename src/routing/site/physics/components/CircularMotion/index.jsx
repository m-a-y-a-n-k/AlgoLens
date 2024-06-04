import React, { useState, useEffect } from "react"
import "./CircularMotion.css"

const ROTATION_INTERVAL_MILLISECONDS = 16

const CircularMotion = () => {
  const [speed, setSpeed] = useState(1) // radians per second
  const [radius, setRadius] = useState(100) // pixels
  const [angle, setAngle] = useState(0) // current angle in radians

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(
        (prevAngle) =>
          prevAngle + (speed * ROTATION_INTERVAL_MILLISECONDS) / 1000
      )
    }, ROTATION_INTERVAL_MILLISECONDS)

    return () => clearInterval(interval)
  }, [speed])

  const angularMomentum = radius * speed

  return (
    <div className="circular-motion-container">
      <div className="controls">
        <label>
          Speed (0 to 20 rad/s) :
          <input
            type="number"
            value={speed}
            onChange={(e) => {
              const updatedSpeed = Number(e.target.value)
              if (updatedSpeed >= 0 && updatedSpeed <= 20)
                setSpeed(updatedSpeed)
            }}
          />
        </label>
        <label>
          Radius (0 to 120 pixels):
          <input
            type="number"
            value={radius}
            onChange={(e) => {
              const updatedRadius = Number(e.target.value)
              if (updatedRadius >= 0 && updatedRadius <= 120)
                setRadius(updatedRadius)
            }}
          />
        </label>
      </div>
      <div className="visualizer">
        <div
          className="circle"
          style={{
            transform: `translate(${radius * Math.cos(angle)}px, ${
              radius * Math.sin(angle)
            }px)`,
          }}
        />
      </div>
      <div className="info">
        <p>Angular Momentum: {angularMomentum.toFixed(2)}</p>
        <p>Number of Revolutions: {(angle / (2 * Math.PI)).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CircularMotion
