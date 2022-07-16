import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@com": "./src/components",
        "@api": "./src/api",
        "@store": "./src/store",
        "@router": "./src/router",
        "@plugins": "./src/plugins",
    }).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: resolveAlias,
    },
    server: {
        host: true,
    },
});
