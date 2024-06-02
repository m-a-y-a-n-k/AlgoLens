import React, { useState, useEffect, useCallback, useMemo } from "react"
import { Alert } from "reactstrap"
import "./ProjectileMotion.css"

const ProjectileMotion = () => {
  const [angle, setAngle] = useState(45)
  const [speed, setSpeed] = useState(50)
  const [trajectory, setTrajectory] = useState([])

  const g = 9.81 // acceleration due to gravity

  const calculateTrajectory = useCallback(() => {
    const radianAngle = (angle * Math.PI) / 180
    const totalTime = (2 * speed * Math.sin(radianAngle)) / g
    const points = []

    for (let t = 0; t <= totalTime; t += 0.1) {
      const x = speed * t * Math.cos(radianAngle)
      const y = speed * t * Math.sin(radianAngle) - 0.5 * g * t * t
      if (y >= 0) {
        points.push({ x, y })
      } else {
        break
      }
    }

    setTrajectory(points)
  }, [angle, speed])

  useEffect(() => {
    calculateTrajectory()
  }, [angle, speed])

  const totalDistance = useMemo(() => {
    return trajectory.length > 0 ? trajectory[trajectory.length - 1].x : 0
  }, [trajectory])

  const maxHeight = useMemo(() => {
    return Math.max(...trajectory.map((point) => point.y), 0)
  }, [trajectory])

  return (
    <div className="projectile-motion">
      <div className="controls">
        <label>
          Angle (degrees):
          <input
            type="number"
            value={angle}
            onChange={(e) => {
              const updatedAngle = Number(e.target.value)
              if (updatedAngle >= 0 && updatedAngle <= 90) {
                setAngle(updatedAngle)
              }
            }}
          />
        </label>
        <label>
          Speed (m/s):
          <input
            type="number"
            value={speed}
            onChange={(e) => {
              const updatedSpeed = Number(e.target.value)
              if (updatedSpeed >= 0 && updatedSpeed <= 1000) {
                setSpeed(updatedSpeed)
              }
            }}
          />
        </label>
      </div>
      <Alert type="info" style={{ width: "100%" }}>
        Angle should be from 0 to 90
      </Alert>
      <Alert type="info" style={{ width: "100%" }}>
        Speed should be from 0 to 1000
      </Alert>
      <div className="visualization">
        <svg width="500" height="500" viewBox="0 0 500 500">
          <path
            d={`M 0 500 ${trajectory
              .map((point) => `${point.x * 10} ${500 - point.y * 10}`)
              .join(" L ")}`}
            stroke="blue"
            fill="none"
          />
          <line
            x1="0"
            y1="500"
            x2="500"
            y2="500"
            stroke="black"
            strokeWidth="2"
          />
          <g>
            <line
              x1="0"
              y1="490"
              x2="0"
              y2="500"
              stroke="black"
              strokeWidth="2"
            />
            <text
              x="5"
              y="490"
              fontFamily="Arial"
              fontSize="12"
              textAnchor="middle"
            >
              0
            </text>
            <line
              x1="500"
              y1="490"
              x2="500"
              y2="500"
              stroke="black"
              strokeWidth="2"
            />
            <text
              x="490"
              y="490"
              fontFamily="Arial"
              fontSize="12"
              textAnchor="middle"
            >
              50
            </text>
          </g>
        </svg>
      </div>
      <div className="results">
        <p>Total Distance: {totalDistance.toFixed(2)} meters</p>
        <p>Maximum Height: {maxHeight.toFixed(2)} meters</p>
      </div>
    </div>
  )
}

export default ProjectileMotion
