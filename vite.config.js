// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path"; 

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        interior: resolve(__dirname, "interior-landing.html"),
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
