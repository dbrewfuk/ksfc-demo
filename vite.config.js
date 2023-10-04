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
        home: resolve(__dirname, "home.html"),
        interior: resolve(__dirname, "interior.html"),
        interiorLanding: resolve(__dirname, "interior-landing.html"),
        resources: resolve(__dirname, "resources.html"),
        rescueTraining: resolve(__dirname, "rescue-training.html"),
        aboutUs: resolve(__dirname, "about-us.html"),
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
