import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "mfe3",
      filename: "/(.*)",
      exposes: {
        "./ricardo": "./src/mfe-entry.js",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 5002,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "dist",
    assetsDir: "",
  },
});
