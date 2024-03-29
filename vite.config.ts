import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import glsl from "vite-plugin-glsl"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), glsl()],
   server: { port: 1111 },
   resolve: {
      alias: [
         { find: "@src", replacement: "/src" },
         { find: "@utils", replacement: "/src/utils" },
         { find: "@components", replacement: "/src/components" },
         { find: "@components_canvas", replacement: "/src/components_canvas" },
         { find: "@state", replacement: "/src/state" },
         { find: "@data", replacement: "/src/data" },
         { find: "@layout", replacement: "/src/layout" },
         { find: "@routing", replacement: "/src/routing" }
      ]
   }
})
