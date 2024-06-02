import React, { useState, useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import Worker from "worker-loader!./generatePoints.worker" // Path to your worker file

const Plot3D = ({ equation, precision = 0.5 }) => {
  const [points, setPoints] = useState([])
  const meshRef = useRef()
  const ambientLightRef = useRef()
  const pointLightRef = useRef()
  const gridHelperRef = useRef()
  const axesHelperRef = useRef()
  const cameraRef = useRef()
  const sphereMeshRef = useRef()
  const sphereGeometryRef = useRef()

  useEffect(() => {
    const worker = new Worker()

    worker.onmessage = (e) => {
      const pointsArray = e.data.map(
        ({ x, y, z }) => new THREE.Vector3(x, y, z)
      )
      setPoints(pointsArray)
    }

    worker.postMessage({ equation, precision })

    return () => worker.terminate()
  }, [equation, precision])

  useEffect(() => {
    if (meshRef.current && points.length > 0) {
      ambientLightRef.current.intensity = 0.8
      pointLightRef.current.position.set(0, 0, 0)
      gridHelperRef.current.args = [0, 0]
      axesHelperRef.current.args = [0]
      sphereMeshRef.current.position.set(0, 0, 0)
      sphereGeometryRef.current.args = [1, 16, 16]
      meshRef.current.geometry.setFromPoints(points)
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  }, [points])

  return (
    <Canvas>
      <ambientLight ref={ambientLightRef} />
      <pointLight ref={pointLightRef} />
      <mesh ref={meshRef}>
        <bufferGeometry />
        <pointsMaterial color="red" size={0.5} />
      </mesh>
      <gridHelper ref={gridHelperRef} />
      <axesHelper ref={axesHelperRef} />
      <OrbitControls enableZoom={false} enablePan={false} ref={cameraRef} />
      <mesh ref={sphereMeshRef}>
        <sphereGeometry ref={sphereGeometryRef} />
        <meshBasicMaterial color="blue" />
      </mesh>
    </Canvas>
  )
}

export default Plot3D
