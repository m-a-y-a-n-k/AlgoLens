import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const CanvasContainer = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  border: 1px solid #000;
`

const PLANE_HALF_LENGTH = 200

const InclinedPlane = ({ angle, initialPosition }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    const drawInclinedPlane = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.save()
      ctx.translate(width / 2, height / 2)
      ctx.rotate((-angle * Math.PI) / 180)

      ctx.beginPath()
      ctx.moveTo(-PLANE_HALF_LENGTH, 0)
      ctx.lineTo(PLANE_HALF_LENGTH, 0)
      ctx.lineWidth = 4
      ctx.strokeStyle = "#000"
      ctx.stroke()

      ctx.restore()
    }

    const drawBall = (x, y) => {
      ctx.beginPath()
      ctx.arc(x, y, 15, 0, 2 * Math.PI)
      ctx.fillStyle = "red"
      ctx.fill()
      ctx.lineWidth = 2
      ctx.strokeStyle = "#000"
      ctx.stroke()
    }

    const animateBall = () => {
      const startX =
        width / 2 +
        (initialPosition === "onGround" ? -1 : 1) *
          PLANE_HALF_LENGTH *
          Math.cos((angle * Math.PI) / 180)

      const startY =
        height / 2 +
        (initialPosition === "onGround" ? 1 : -1) *
          PLANE_HALF_LENGTH *
          Math.sin((angle * Math.PI) / 180)

      const endX =
        width / 2 +
        (initialPosition === "onGround" ? 1 : -1) *
          PLANE_HALF_LENGTH *
          Math.cos((angle * Math.PI) / 180)

      let ballX = startX
      let ballY = startY - 20
      let speed = initialPosition === "onGround" ? 1 : -1
      let requestId

      const step = () => {
        drawInclinedPlane()
        drawBall(ballX, ballY)

        ballX += speed * Math.cos((angle * Math.PI) / 180)
        ballY -= speed * Math.sin((angle * Math.PI) / 180)

        if ((speed === 1 && ballX > endX) || (speed === -1 && ballX < endX)) {
          cancelAnimationFrame(requestId)
        } else {
          requestId = requestAnimationFrame(step)
        }
      }

      requestId = requestAnimationFrame(step)
      return () => cancelAnimationFrame(requestId)
    }

    drawInclinedPlane()
    animateBall()
  }, [angle, initialPosition])

  return (
    <CanvasContainer>
      <canvas ref={canvasRef} width={600} height={400} />
    </CanvasContainer>
  )
}

export default InclinedPlane
