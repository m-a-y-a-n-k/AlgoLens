import React, { useState, useEffect } from "react"
import "./SortingVisualiser.css"

const SortingVisualizer = () => {
  const [array, setArray] = useState([])
  const [arraySize, setArraySize] = useState(50)
  const [isSorting, setIsSorting] = useState(false)
  const [speed, setSpeed] = useState(50)

  useEffect(() => {
    generateRandomArray(arraySize)
  }, [arraySize])

  const generateRandomArray = (size) => {
    const newArray = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 100) + 1
    )
    setArray(newArray)
  }

  const bubbleSort = async () => {
    setIsSorting(true)
    const arr = [...array]
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          setArray([...arr])
          await new Promise((resolve) => setTimeout(resolve, speed))
        }
      }
    }
    setIsSorting(false)
  }

  const quickSort = async (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
      const pi = await partition(arr, low, high)
      await Promise.all([
        quickSort(arr, low, pi - 1),
        quickSort(arr, pi + 1, high),
      ])
    }
    setArray([...arr])
    return arr
  }

  const partition = async (arr, low, high) => {
    const pivot = arr[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        setArray([...arr])
        await new Promise((resolve) => setTimeout(resolve, speed))
      }
    }
    ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    setArray([...arr])
    await new Promise((resolve) => setTimeout(resolve, speed))
    return i + 1
  }

  const mergeSort = async (arr) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = await mergeSort(arr.slice(0, mid))
    const right = await mergeSort(arr.slice(mid))
    return await merge(left, right)
  }

  const merge = async (left, right) => {
    let sortedArray = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArray.push(left.shift())
      } else {
        sortedArray.push(right.shift())
      }
      setArray([...sortedArray, ...left, ...right])
      await new Promise((resolve) => setTimeout(resolve, speed))
    }
    return [...sortedArray, ...left, ...right]
  }

  const handleArraySizeChange = (e) => {
    setArraySize(Number(e.target.value))
  }

  const handleSpeedChange = (e) => {
    setSpeed(Number(e.target.value))
  }

  return (
    <div className="sorting-visualizer">
      <div className="controls">
        <button
          onClick={() => generateRandomArray(arraySize)}
          disabled={isSorting}
        >
          Generate New Array
        </button>
        <button onClick={bubbleSort} disabled={isSorting}>
          Bubble Sort
        </button>
        <button
          onClick={async () => {
            setIsSorting(true)
            await quickSort(array)
            setIsSorting(false)
          }}
          disabled={isSorting}
        >
          Quick Sort
        </button>
        <button
          onClick={async () => {
            setIsSorting(true)
            await mergeSort(array)
            setIsSorting(false)
          }}
          disabled={isSorting}
        >
          Merge Sort
        </button>
        <label>
          Array Size:
          <input
            type="range"
            min="10"
            max="100"
            value={arraySize}
            onChange={handleArraySizeChange}
            disabled={isSorting}
          />
        </label>
        <label>
          Speed:
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={handleSpeedChange}
            disabled={isSorting}
          />
        </label>
      </div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            key={`array-element-${value}-${idx}`}
            className="array-bar"
            style={{ height: `${value}%` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SortingVisualizer
