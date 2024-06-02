import React, { useState, useEffect, useRef, useCallback } from "react"
import { Grid } from "@material-ui/core"
import Canvas from "routing/site/algo/components/ClosestPair/Canvas"
import Run from "routing/site/algo/components/ClosestPair/Run"
import { Alert } from "reactstrap"

const ClosestPair = () => {
  const [points, setPoints] = useState([])
  const [clickable, setClickable] = useState(true)
  const [alert, setAlert] = useState(null)
  const canvasRef = useRef(null)

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }, [])

  const drawPoints = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#ff2626" // Red color
    points.forEach((p) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2, true)
      ctx.fill()
      ctx.font = "15px Arial"
      ctx.fillText(`( ${p.x} , ${p.y} )`, p.x + 6, p.y + 6)
    })
  }, [points])

  const drawLine = useCallback((p, q, stroke) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    ctx.strokeStyle = stroke
    ctx.setLineDash([2, 2])
    ctx.beginPath()
    ctx.moveTo(p.x, p.y)
    ctx.lineTo(q.x, q.y)
    ctx.stroke()
  }, [])

  const plot = useCallback(
    (i, j, shortest = null) => {
      if (i >= points.length - 1) {
        clearCanvas()
        drawPoints()
        if (shortest) {
          drawLine(shortest.start, shortest.end, "#ff2626")
        }
        setClickable(true)
        return
      }
      if (j >= points.length) {
        setTimeout(() => plot(i + 1, i + 2, shortest), 2000)
        return
      }
      clearCanvas()
      drawPoints()
      drawLine(points[i], points[j], "#000000")

      const length =
        (points[j].x - points[i].x) ** 2 + (points[j].y - points[i].y) ** 2
      if (!shortest || length < shortest.length) {
        shortest = {
          start: { x: points[i].x, y: points[i].y },
          end: { x: points[j].x, y: points[j].y },
          length: length,
        }
      }

      if (shortest) {
        drawLine(shortest.start, shortest.end, "#ff2626")
      }

      setTimeout(() => plot(i, j + 1, shortest), 1200)
    },
    [points, drawLine, clearCanvas, drawPoints]
  )

  const find = useCallback(
    (speed) => {
      if (speed.toLowerCase() === "slow") {
        if (points.length >= 2) {
          setClickable(false)
          setAlert(null)
          plot(0, 1)
        } else {
          setAlert({
            text: "Not enough points on canvas",
            type: "info",
          })
        }
      } else {
        setAlert({
          text: "We shall implement this soon.",
          type: "danger",
        })
      }
    },
    [points, plot]
  )

  useEffect(() => {
    canvasRef.current = document.getElementById("pointsCanvas")
  }, [])

  useEffect(() => {
    drawPoints()
  }, [points])

  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={12} className="mt-2">
          {alert && (
            <Alert
              color={alert.type}
              isOpen={!!alert.text}
              toggle={() => setAlert(null)}
            >
              {alert.text}
            </Alert>
          )}
          <Run find={find} />
        </Grid>
        <Grid item xs={12} className="mt-3">
          <h3 className="p-2">Click in the canvas below to draw points</h3>
          <Canvas
            id="pointsCanvas"
            clickable={clickable}
            width={`${window.innerWidth - 70}`}
            height="400"
            addPoints={(p) => {
              if (clickable) {
                setPoints((prevPoints) => [...prevPoints, p])
              }
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ClosestPair
