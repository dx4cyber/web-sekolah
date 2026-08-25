import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 8081,
    host: true,
  },

  plugins: [
    tsconfigPaths(),
    tanstackStart(),
    viteReact(),
    tailwindcss(),
  ],
});