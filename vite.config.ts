import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "vite-plugin-vue-ecss",
      fileName: (format) => `index.${format}.js`,
    },
  },
});
