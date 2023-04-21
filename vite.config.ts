import { defineConfig,splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
// @ts-ignore
import manifest from './manifest.json'
import buildNotifier from './.vite/plugins/rollup-plugin-notifier'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const plugins: any[] = [tsconfigPaths(), react(), crx({ manifest }),splitVendorChunkPlugin()]
  if(mode === 'development'){
    plugins.push(buildNotifier())
  }
  return defineConfig({
    plugins: plugins,
    build: {
      rollupOptions:{
        input: ['app.html'],
        output:{
          assetFileNames:"[hash].[name].[ext]",
        }
      }
    },
  })
}
