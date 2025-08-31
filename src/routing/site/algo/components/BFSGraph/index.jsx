import React, { useState, useEffect } from "react"
import styles from "./BFSGraph.module.css"

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F", "G"],
  D: ["B", "H"],
  E: ["B", "I"],
  F: ["C", "J"],
  G: ["C"],
  H: ["D"],
  I: ["E"],
  J: ["F"],
}

const positions = {
  A: { x: 100, y: 150 },
  B: { x: 220, y: 80 },
  C: { x: 220, y: 220 },
  D: { x: 340, y: 40 },
  E: { x: 340, y: 120 },
  F: { x: 340, y: 200 },
  G: { x: 340, y: 280 },
  H: { x: 460, y: 40 },
  I: { x: 460, y: 120 },
  J: { x: 460, y: 200 },
}

const BFSGraph = () => {
  const [visited, setVisited] = useState([])

  useEffect(() => {
    runBFS("A") // start BFS at node A
  }, [])

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const runBFS = async (start) => {
    const q = [start]
    const seen = new Set()

    while (q.length) {
      const node = q.shift()
      if (seen.has(node)) continue
      seen.add(node)

      setVisited((v) => [...v, node])
      await sleep(700) // animation delay

      graph[node].forEach((nbr) => {
        if (!seen.has(nbr)) q.push(nbr)
      })
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Breadth First Search (Graph) 🌐</h2>
      <svg className={styles.svg}>
        {/* Render edges */}
        {Object.entries(graph).map(([node, neighbors]) =>
          neighbors.map((nbr) => {
            const { x: x1, y: y1 } = positions[node]
            const { x: x2, y: y2 } = positions[nbr]
            return (
              <line
                key={`${node}-${nbr}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#999"
                strokeWidth="2"
              />
            )
          })
        )}

        {/* Render nodes */}
        {Object.entries(positions).map(([node, { x, y }]) => (
          <g key={node}>
            <circle
              cx={x}
              cy={y}
              r="25"
              className={`${styles.node} ${
                visited.includes(node) ? styles.visited : ""
              }`}
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dy=".3em"
              className={styles.label}
            >
              {node}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default BFSGraph
