import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

 

// resolve: {
//   alias: {
//     '@components': path.resolve(__dirname, 'src/components'),
//     '@utils': path.resolve(__dirname, 'src/utils'),
//     '@assets': path.resolve(__dirname, 'src/assets'),
//   },
// },



  
 