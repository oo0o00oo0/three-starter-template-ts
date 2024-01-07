import { Canvas, useFrame } from "@react-three/fiber"
import { DoubleSide, Mesh, Vector3 } from "three"
import SimpleShaderMaterial from "@components_canvas/SimpleShaderMaterial/SimpleShaderMaterial"
import { OrbitControls } from "@react-three/drei"
import React from "react"

export const TCanvas = () => {
   return (
      <div id="canvas_wr">
         <Canvas
            camera={{ position: new Vector3(0, 0, 1), fov: 75 }}
            dpr={window.devicePixelRatio}>
            <MeshComponent position={[0, 0, 0]} />
            <MeshComponent position={[3, 0, 0]} />
            <MeshComponent position={[3, 3, 0]} />
            <OrbitControls />
         </Canvas>
      </div>
   )
}

const MeshComponent = ({ position }) => {
   const ref = React.useRef<Mesh>()

   useFrame(({ clock }) => {
      ref.current.rotation.x = clock.getElapsedTime()
   })

   return (
      <mesh
         ref={ref}
         position={position}>
         <boxGeometry args={[1, 1, 1]} />
         <SimpleShaderMaterial />
      </mesh>
   )
}

export default TCanvas
