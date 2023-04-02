import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import styled from "styled-components/macro"
import { DoubleSide } from "three"
import SimpleShaderMaterial from "@components_canvas/SimpleShaderMaterial/SimpleShaderMaterial"
import { OrbitControls } from "@react-three/drei"

export const TCanvas = () => {
   return (
      <CanvasWr>
         <Canvas
            camera={{ position: [0, 0, 3], fov: 75 }}
            dpr={window.devicePixelRatio}>
            <Suspense fallback={null}>
               <mesh>
                  <planeGeometry args={[1, 1]} />
                  <SimpleShaderMaterial />
               </mesh>
               <OrbitControls />
            </Suspense>
         </Canvas>
      </CanvasWr>
   )
}

const CanvasWr = styled.div`
   z-index: 0;
   position: fixed;
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`

export default TCanvas
