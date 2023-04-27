/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, configDefaults } from "vitest/config";
import sassDts from "vite-plugin-sass-dts";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path";

export default defineConfig({
  plugins: [react(), sassDts(), eslint()],
  ssr: { target: "node" },
  esbuild: { jsx: "automatic" },

  build: {
    minify: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "c8",
      all: true,
      skipFull: false,
      reporter: "text",
      exclude: [...configDefaults.exclude, "src/main.tsx", "vite-env.d.ts"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
