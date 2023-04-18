import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
// @ts-ignore
import manifest from './manifest.json'
import buildNotifier from './.vite/plugins/rollup-plugin-notifier'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const plugins: any[] = [tsconfigPaths(), react(), crx({ manifest })]
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
          manualChunks:(id)=>{
            // @ts-ignore
            if(id.includes("node_modules")){
              return "vendor"
            }
          }
        }
      }
    },
  })
}
