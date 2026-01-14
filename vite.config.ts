import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    enforce: "pre",
    resolveId(source: string) {
      const prefix = "../../assets/";
      if (source.startsWith(prefix)) {
        const file = source.slice(prefix.length);
        return path.resolve(__dirname, "src/assets", file);
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [figmaAssetResolver(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
