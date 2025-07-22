import { defineConfig } from "vite"
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, './index.html'),
                layout: resolve(__dirname, './src/main.js'),
                card: resolve(__dirname, './src/card.js'),
            }
        }
    }
})