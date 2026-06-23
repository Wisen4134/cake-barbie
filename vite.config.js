import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), cloudflare()],
    base: mode === "github" ? "/cake-barbie/" : "/",
  };
});