import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
  resolve: {
    // 别名配置
    alias: {
      // 值得注意的是，alias 别名配置不仅在 JavaScript 的 import 语句中生效，在 CSS 代码的 @import 和 url导入语句中也同样生效。
      '@assets': path.join(__dirname, 'src/assets'),
    },
  },
});
