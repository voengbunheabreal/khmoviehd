import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/', // Base URL for the project
  server: {
    port: 3000, // Change this to your desired port
    open: true, // Automatically open the browser
    proxy: {
      '/api': {
        target: 'https://api.example.com', // Change this to your API endpoint
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Change this to your desired output directory
    sourcemap: true, // Enable sourcemaps for easier debugging
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Main entry point
        nested: path.resolve(__dirname, 'nested/index.html'), // Nested entry point
      },
      output: {
        entryFileNames: '[name].js', // Customize output file names
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure this alias is present
    },
  },
});
