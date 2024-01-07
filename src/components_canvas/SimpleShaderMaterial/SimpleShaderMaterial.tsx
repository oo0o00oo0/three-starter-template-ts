import shaderMaterial from "@src/lib/dreiShaderMaterial"
//@ts-ignore
import vertex from "./glsl/vertex.glsl"
//@ts-ignore
import fragment from "./glsl/fragment.glsl"
import { extend, useFrame } from "@react-three/fiber"
import React from "react"
import { ShaderMaterial, Vector2 } from "three"

type SimpleShaderTypes = {
   [key: string]: any
}

const SimpleShader = shaderMaterial(
   {
      uTime: { value: 0 },
      uPointer: { value: new Vector2(0, 0) }
   },
   vertex,
   fragment,
   () => console.log("init shader")
)

extend({ SimpleShader })

const SimpleShaderMaterial = (props: SimpleShaderTypes) => {
   const shaderRef = React.useRef<ShaderMaterial>()
   useFrame(({ clock, pointer }) => {
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime()
      shaderRef.current.uniforms.uPointer.value = new Vector2(
         (pointer.x + 1) * 0.5,
         (pointer.y + 1) * 0.5
      )
   })

   return (
      // @ts-ignore
      <simpleShader
         {...props}
         ref={shaderRef}
      />
   )
}

export default SimpleShaderMaterial
