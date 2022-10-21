import React from "react"
import Point from "common/components/Point"

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.canvas = null
  }

  componentDidMount() {
    this.canvas = document.getElementById(this.props.id)
  }

  render() {
    return (
      <canvas
        id={this.props.id}
        width={this.props.width}
        height={this.props.height}
        style={{
          margin: "20px",
          border: "1px solid lightgray",
          background: "rgba(123,178,91,0.3)",
        }}
        onClick={(event) => {
          if (this.props.clickable) {
            let p = new Point(this.canvas)
            p.draw(event)
            this.props.addPoints({ x: p.x, y: p.y })
          }
        }}
      ></canvas>
    )
  }
}

export default Canvas
