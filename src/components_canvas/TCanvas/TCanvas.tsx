import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import styled from "styled-components/macro"
import SimpleShaderMaterial from "@components_canvas/SimpleShaderMaterial/SimpleShaderMaterial"

export const TCanvas = () => {
   return (
      <CanvasWr>
         <Canvas
            camera={{ fov: 45 }}
            dpr={window.devicePixelRatio}>
            <Suspense fallback={null}>
               <mesh>
                  <sphereGeometry />
                  <SimpleShaderMaterial />
               </mesh>
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
