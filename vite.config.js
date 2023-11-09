import Inspect from 'vite-plugin-inspect';
import { resolve } from "path";

export default {
  base: "/socratica",
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        page1: resolve(__dirname, 'page1/index.html'),
        page2: resolve(__dirname, 'page2/index.html'),
        page3: resolve(__dirname, 'page3/index.html'),
        page4: resolve(__dirname, 'page4/index.html'),
        page5: resolve(__dirname, 'page5/index.html'),
        page6: resolve(__dirname, 'page6/index.html')
      }

    }
  }
}