import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // If your app is deployed in a subdirectory, adjust the base path.
  base: '/', // Change this if hosting in a subfolder, e.g., '/subfolder/'
  assetsInclude: ['**/*.JPG', '**/*.ARW'], // Include additional asset types.

  // Optional: HTTPS configuration for local development
  server: {
    https: false, // Set to true if you need HTTPS locally (requires certificates).
  },

  // Production build options
  build: {
    outDir: 'dist', // Default build output folder.
    rollupOptions: {
      output: {
        // Ensure static assets are placed in appropriate folders
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});
