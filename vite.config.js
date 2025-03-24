import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  // ESLint報錯：'process' is not defined  no-undef
  // base: process.env.NODE_ENV === "production" ? "/Hexschool_2025-Independent-study/" : "/",
  return {
    base:  mode === 'production' ? "/Hexschool_2025-Independent-study/" : "/",
    plugins: [react()],
  }
})
