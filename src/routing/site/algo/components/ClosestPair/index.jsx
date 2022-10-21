import React from "react"
import { Grid } from "@material-ui/core"
import Canvas from "routing/site/algo/components/ClosestPair/Canvas"
import Run from "routing/site/algo/components/ClosestPair/Run"
import { Alert } from "reactstrap"

export default class ClosestPair extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      points: [],
      clickable: true,
      shortest: null,
      alert: null,
    }
  }

  componentDidMount() {
    this.canvas = document.getElementById("pointsCanvas")
  }

  drawPoints() {
    let ctx = this.canvas.getContext("2d")
    ctx.fillStyle = "#ff2626" // Red color

    for (const p of this.state.points) {
      ctx.beginPath() //Start path
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2, true)
      ctx.fill()
      ctx.font = "15px Arial"
      ctx.fillText(`( ${p.x} , ${p.y} ) `, p.x + 6, p.y + 6)
    }
  }

  drawLine(p, q, stroke) {
    let ctx = this.canvas.getContext("2d")
    ctx.strokeStyle = stroke
    ctx.setLineDash([2, 2])
    ctx.beginPath()
    ctx.moveTo(p.x, p.y)
    ctx.lineTo(q.x, q.y)
    let length = (q.x - p.x) * (q.x - p.x) + (q.y - p.y) * (q.y - p.y)
    if (!this.state.shortest) {
      this.setState({
        shortest: {
          start: { x: p.x, y: p.y },
          end: { x: q.x, y: q.y },
          length: length,
        },
      })
    } else if (length < this.state.shortest.length) {
      this.setState({
        shortest: {
          start: { x: p.x, y: p.y },
          end: { x: q.x, y: q.y },
          length: length,
        },
      })
    }
    ctx.stroke()
  }

  clearCanvas() {
    const context = this.canvas.getContext("2d")
    context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  plot(i, j) {
    if (i >= this.state.points.length - 1) {
      this.clearCanvas()
      this.drawPoints()
      if (this.state.shortest)
        this.drawLine(
          this.state.shortest.start,
          this.state.shortest.end,
          "#ff2626"
        )
      this.setState({ clickable: true })
      return
    }
    if (j === this.state.points.length) {
      i = i + 1
      j = i
      setTimeout(() => {
        this.plot(i, j + 1)
      }, 2000)
      return
    }
    this.clearCanvas()
    this.drawPoints()
    this.drawLine(this.state.points[i], this.state.points[j], "#000000")
    if (this.state.shortest)
      this.drawLine(
        this.state.shortest.start,
        this.state.shortest.end,
        "#ff2626"
      )
    setTimeout(() => {
      this.plot(i, j + 1)
    }, 1200)
  }

  find(speed) {
    switch (speed.toLowerCase()) {
      case "slow":
        if (this.state.points.length >= 2) {
          this.setState({ clickable: false, alert: null })
          this.plot(0, 1)
        } else {
          this.setState({
            alert: {
              text: "Not enough points on canvas",
              type: "info",
            },
          })
        }
        return
      default:
        this.setState({
          alert: {
            text: "We shall implement this soon.",
            type: "danger",
          },
        })
        return
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item container>
          <Grid item xs={12} className="mt-2">
            {this.state.alert && (
              <Alert
                color={this.state.alert.type}
                isOpen={!!this.state.alert.text}
                toggle={() => {
                  this.setState({ alert: null })
                }}
              >
                {this.state.alert.text}
              </Alert>
            )}
            <Run find={(speed) => this.find(speed)} />
          </Grid>
          <Grid item xs={12} className="mt-3">
            <h3 className="p-2">Click in the canvas below to draw points</h3>
            <Canvas
              id="pointsCanvas"
              clickable={this.state.clickable}
              width={`${window.innerWidth - 70}`}
              height="400"
              addPoints={(p) => {
                if (this.state.clickable) {
                  let points = [...this.state.points]
                  points.push(p)
                  this.setState({ points })
                }
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
