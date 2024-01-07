import { Canvas } from "@react-three/fiber"
import { DoubleSide, Vector3 } from "three"
import SimpleShaderMaterial from "@components_canvas/SimpleShaderMaterial/SimpleShaderMaterial"
import { OrbitControls } from "@react-three/drei"

export const TCanvas = () => {
   return (
      <div id="canvas_wr">
         <Canvas
            camera={{ position: new Vector3(0, 0, 1), fov: 75 }}
            dpr={window.devicePixelRatio}>
            <mesh>
               <planeGeometry args={[1, 1]} />
               <SimpleShaderMaterial side={DoubleSide} />
            </mesh>
            <OrbitControls />
         </Canvas>
      </div>
   )
}

export default TCanvas
