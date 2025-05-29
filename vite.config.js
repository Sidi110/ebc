import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ebc/', // 👈 your repo name goes here
  plugins: [react()],
});
