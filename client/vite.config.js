/* eslint-disable no-unused-vars */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: {
        "/graphql": {
          target: "http://localhost:3001",
          secure: false,
          changeOrigin: true,
        },
      },
    },
    define: {
      "process.env.VITE_API_KEY": env.VITE_API_KEY,
    },
  };
});
