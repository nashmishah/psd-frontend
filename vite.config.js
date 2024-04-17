import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/psd-frontend/',
  plugins: [react()],
})

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       jsxRuntime: 'classic',
//     }),
//   ],
// })