import React, { useState, useEffect, useCallback, useMemo } from "react"
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
            onChange={(e) => setAngle(Number(e.target.value))}
          />
        </label>
        <label>
          Speed (m/s):
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="visualization">
        <svg width="500" height="300" viewBox="0 0 500 300">
          <path
            d={`M 0 300 ${trajectory
              .map((point) => `${point.x * 10} ${300 - point.y * 10}`)
              .join(" L ")}`}
            stroke="blue"
            fill="none"
          />
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
