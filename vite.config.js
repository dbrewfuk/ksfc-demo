// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    resolve: {
      alias: {
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      },
    },
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "home.html"),
        interior: path.resolve(__dirname, "interior.html"),
        interiorLanding: path.resolve(__dirname, "interior-landing.html"),
        resources: path.resolve(__dirname, "resources.html"),
        rescueTraining: path.resolve(__dirname, "rescue-training.html"),
        aboutUs: path.resolve(__dirname, "about-us.html"),
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
