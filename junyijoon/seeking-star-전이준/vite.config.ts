import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    svgr(),
  ],
  server: {
    proxy: {
      "/vworld": {
        target: "https://api.vworld.kr",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/vworld/, ""),
      },
      "/kma": {
        target: "https://apihub.kma.go.kr",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/kma/, ""),
      },
    },
  },
});
