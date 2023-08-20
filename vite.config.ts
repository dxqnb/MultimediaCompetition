import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {defineConfig} from 'vite'
import {VitePWA} from 'vite-plugin-pwa';
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        legacy(),
        VitePWA({registerType: 'autoUpdate'}),
        basicSsl(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // @ts-ignore
    test: {
        globals: true,
        environment: 'jsdom'
    },

})
