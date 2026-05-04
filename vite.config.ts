import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      pages: [
        { path: "/", prerender: { enabled: true } },
        { path: "/mentions-legales", prerender: { enabled: true } },
      ],
    }),
    viteReact(),
  ],
});
