// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
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
