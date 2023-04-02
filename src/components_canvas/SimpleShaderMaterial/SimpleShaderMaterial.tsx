import shaderMaterial from "@src/lib/dreiShaderMaterial"
//@ts-ignore
import vertex from "./glsl/vertex.glsl"
//@ts-ignore
import fragment from "./glsl/fragment.glsl"
import { extend } from "@react-three/fiber"
import { animated } from "@react-spring/three"

type Props = {}

const SimpleShader = shaderMaterial(
   {
      uTime: { value: 0 }
   },
   vertex,
   fragment,
   () => console.log("init")
)

extend({ SimpleShader })

// @ts-ignore
const AnimatedSimpleShader = animated("SimpleShader")

const SimpleShaderMaterial = (props: Props) => {
   // @ts-ignore
   return <AnimatedSimpleShader />
}

export default SimpleShaderMaterial
