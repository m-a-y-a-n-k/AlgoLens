import React, { useState, useEffect, useRef } from "react"
import "./NeuralNetwork.css"

const NeuralNetwork = () => {
  const canvasRef = useRef(null)
  const [layers, setLayers] = useState([3, 4, 4, 2])
  const [activations, setActivations] = useState([])
  const [weights, setWeights] = useState([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(500)
  const [inputValues, setInputValues] = useState([0.5, 0.8, 0.3])

  const canvasWidth = 800
  const canvasHeight = 500

  useEffect(() => {
    initializeNetwork()
  }, [layers])

  useEffect(() => {
    drawNetwork()
  }, [activations, weights, layers])

  const initializeNetwork = () => {
    // Initialize activations
    const newActivations = layers.map((layerSize) => Array(layerSize).fill(0))
    setActivations(newActivations)

    // Initialize weights
    const newWeights = []
    for (let i = 0; i < layers.length - 1; i++) {
      const layerWeights = []
      for (let j = 0; j < layers[i]; j++) {
        const neuronWeights = []
        for (let k = 0; k < layers[i + 1]; k++) {
          neuronWeights.push(Math.random() * 2 - 1)
        }
        layerWeights.push(neuronWeights)
      }
      newWeights.push(layerWeights)
    }
    setWeights(newWeights)
  }

  const sigmoid = (x) => {
    return 1 / (1 + Math.exp(-x))
  }

  const forwardPass = async () => {
    if (isAnimating) return
    setIsAnimating(true)

    const newActivations = [...activations]

    // Set input layer
    newActivations[0] = [...inputValues]
    setActivations([...newActivations])
    await new Promise((resolve) => setTimeout(resolve, animationSpeed))

    // Forward propagation
    for (let layer = 0; layer < layers.length - 1; layer++) {
      for (let neuron = 0; neuron < layers[layer + 1]; neuron++) {
        let sum = 0
        for (let prevNeuron = 0; prevNeuron < layers[layer]; prevNeuron++) {
          sum +=
            newActivations[layer][prevNeuron] *
            weights[layer][prevNeuron][neuron]
        }
        // Use sigmoid activation
        newActivations[layer + 1][neuron] = sigmoid(sum)
      }
      setActivations([...newActivations])
      await new Promise((resolve) => setTimeout(resolve, animationSpeed))
    }

    setIsAnimating(false)
  }

  const drawNetwork = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    const layerSpacing = canvasWidth / (layers.length + 1)
    const nodePositions = []

    // Calculate node positions
    layers.forEach((layerSize, layerIndex) => {
      const layerNodes = []
      const verticalSpacing = canvasHeight / (layerSize + 1)

      for (let i = 0; i < layerSize; i++) {
        const x = layerSpacing * (layerIndex + 1)
        const y = verticalSpacing * (i + 1)
        layerNodes.push({ x, y })
      }
      nodePositions.push(layerNodes)
    })

    // Draw connections (weights)
    for (let layer = 0; layer < layers.length - 1; layer++) {
      for (let i = 0; i < layers[layer]; i++) {
        for (let j = 0; j < layers[layer + 1]; j++) {
          const from = nodePositions[layer][i]
          const to = nodePositions[layer + 1][j]

          // Get weight value
          const weight = weights[layer]?.[i]?.[j] || 0
          const opacity = Math.abs(weight)
          const color = weight > 0 ? "#4ecca3" : "#ff6b6b"

          ctx.strokeStyle = color
          ctx.globalAlpha = opacity * 0.5
          ctx.lineWidth = Math.abs(weight) * 2 + 0.5
          ctx.beginPath()
          ctx.moveTo(from.x, from.y)
          ctx.lineTo(to.x, to.y)
          ctx.stroke()
        }
      }
    }

    ctx.globalAlpha = 1

    // Draw nodes
    layers.forEach((layerSize, layerIndex) => {
      for (let i = 0; i < layerSize; i++) {
        const pos = nodePositions[layerIndex][i]
        const activation = activations[layerIndex]?.[i] || 0

        // Node circle
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI)

        // Color based on activation
        const intensity = Math.min(255, Math.floor(activation * 255))
        ctx.fillStyle = `rgb(${intensity}, ${Math.floor(
          204 * activation
        )}, ${163})`
        ctx.fill()

        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 2
        ctx.stroke()

        // Activation value
        ctx.fillStyle = "#fff"
        ctx.font = "12px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(activation.toFixed(2), pos.x, pos.y)
      }
    })

    // Draw layer labels
    ctx.fillStyle = "#4ecca3"
    ctx.font = "14px Arial"
    ctx.textAlign = "center"

    layers.forEach((layerSize, layerIndex) => {
      const x = layerSpacing * (layerIndex + 1)
      let label = ""
      if (layerIndex === 0) label = "Input Layer"
      else if (layerIndex === layers.length - 1) label = "Output Layer"
      else label = `Hidden Layer ${layerIndex}`

      ctx.fillText(label, x, 30)
      ctx.fillText(`(${layerSize} neurons)`, x, 48)
    })
  }

  const addLayer = () => {
    if (layers.length < 6) {
      const newLayers = [...layers]
      newLayers.splice(layers.length - 1, 0, 3)
      setLayers(newLayers)
    }
  }

  const removeLayer = () => {
    if (layers.length > 2) {
      const newLayers = [...layers]
      newLayers.splice(layers.length - 2, 1)
      setLayers(newLayers)
    }
  }

  const updateLayerSize = (layerIndex, delta) => {
    const newLayers = [...layers]
    const newSize = newLayers[layerIndex] + delta
    if (newSize >= 1 && newSize <= 8) {
      newLayers[layerIndex] = newSize
      setLayers(newLayers)

      if (layerIndex === 0) {
        setInputValues(Array(newSize).fill(0.5))
      }
    }
  }

  const randomizeWeights = () => {
    initializeNetwork()
  }

  const randomizeInputs = () => {
    const newInputs = Array(layers[0])
      .fill(0)
      .map(() => Math.random())
    setInputValues(newInputs)
  }

  return (
    <div className="neural-network-container">
      <div className="nn-header">
        <h1>Neural Network Visualization 🧠</h1>
        <p>
          Customize the architecture and watch forward propagation in action!
        </p>
      </div>

      <div className="nn-content">
        <div className="nn-canvas-wrapper">
          <canvas
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            className="nn-canvas"
          />
        </div>

        <div className="nn-controls">
          <div className="control-group">
            <h3>Actions</h3>
            <button onClick={forwardPass} disabled={isAnimating}>
              {isAnimating ? "Propagating..." : "Forward Propagation"}
            </button>
            <button onClick={randomizeWeights} disabled={isAnimating}>
              Randomize Weights
            </button>
            <button onClick={randomizeInputs} disabled={isAnimating}>
              Randomize Inputs
            </button>
          </div>

          <div className="control-group">
            <h3>Architecture</h3>
            <button onClick={addLayer} disabled={layers.length >= 6}>
              Add Hidden Layer
            </button>
            <button onClick={removeLayer} disabled={layers.length <= 2}>
              Remove Hidden Layer
            </button>
            <div className="layer-config">
              {layers.map((size, index) => (
                <div key={index} className="layer-item">
                  <span>
                    {index === 0
                      ? "Input"
                      : index === layers.length - 1
                      ? "Output"
                      : `Hidden ${index}`}
                    :
                  </span>
                  <div className="layer-controls">
                    <button
                      onClick={() => updateLayerSize(index, -1)}
                      disabled={size <= 1}
                    >
                      -
                    </button>
                    <span>{size}</span>
                    <button
                      onClick={() => updateLayerSize(index, 1)}
                      disabled={size >= 8}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="control-group">
            <h3>Input Values</h3>
            {inputValues.map((value, index) => (
              <label key={index}>
                Input {index + 1}: {value.toFixed(2)}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={value}
                  onChange={(e) => {
                    const newInputs = [...inputValues]
                    newInputs[index] = parseFloat(e.target.value)
                    setInputValues(newInputs)
                  }}
                  disabled={isAnimating}
                />
              </label>
            ))}
          </div>

          <div className="control-group">
            <h3>Settings</h3>
            <label>
              Animation Speed: {animationSpeed}ms
              <input
                type="range"
                min="100"
                max="1000"
                step="100"
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
              />
            </label>
          </div>

          <div className="control-group">
            <h3>Network Stats</h3>
            <div className="info-item">
              <span>Total Layers:</span>
              <span>{layers.length}</span>
            </div>
            <div className="info-item">
              <span>Hidden Layers:</span>
              <span>{layers.length - 2}</span>
            </div>
            <div className="info-item">
              <span>Total Neurons:</span>
              <span>{layers.reduce((sum, size) => sum + size, 0)}</span>
            </div>
            <div className="info-item">
              <span>Total Weights:</span>
              <span>
                {layers
                  .slice(0, -1)
                  .reduce((sum, size, i) => sum + size * layers[i + 1], 0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="nn-info">
        <h3>About Neural Networks</h3>
        <p>
          A Neural Network is a computational model inspired by biological
          neurons. It consists of interconnected layers of nodes (neurons) that
          process and transform input data to produce output.
        </p>
        <h4>Key Components:</h4>
        <ul>
          <li>
            <strong>Input Layer:</strong> Receives the initial data
          </li>
          <li>
            <strong>Hidden Layers:</strong> Process and extract features from
            the data
          </li>
          <li>
            <strong>Output Layer:</strong> Produces the final prediction or
            classification
          </li>
          <li>
            <strong>Weights:</strong> Connection strengths between neurons
            (shown as lines)
          </li>
          <li>
            <strong>Activation Function:</strong> Sigmoid function used to
            introduce non-linearity
          </li>
        </ul>
        <p>
          <strong>Color Coding:</strong> Node brightness indicates activation
          strength. Green connections show positive weights, red shows negative
          weights.
        </p>
      </div>
    </div>
  )
}

export default NeuralNetwork
