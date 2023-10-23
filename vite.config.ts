import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';

const projectRootDir = path.resolve(__dirname);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        alias({
          entries: [
            {
              find: 'src',
              replacement: path.resolve(projectRootDir, 'src')
            }
          ],
        }),
        resolve()
      ]
    }
  }
})
