import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate dependencies into a vendor chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 9000, // Increase the warning limit
  },
});
