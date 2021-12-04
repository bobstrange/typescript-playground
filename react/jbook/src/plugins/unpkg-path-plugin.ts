import * as esbuild from 'esbuild-wasm'
import axios from 'axios'
import localForage from 'localforage'

const fileCache = localForage.createInstance({
  name: 'filecache',
})

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log('onResole', args)
        if (args.path === 'index.js') {
          return { path: args.path, namespace: 'a' }
        }
        if (args.path.includes('./') || args.path.includes('../')) {
          return {
            path: new URL(
              args.path,
              'https://unpkg.com' + args.resolveDir + '/'
            ).href,
            namespace: 'a',
          }
        }
        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: 'a',
        }
      })

      build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
        console.log('onLoad', args)

        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              import { useState } from 'react'
              console.log(useState);
            `,
          }
        }

        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        )

        if (cachedResult) {
          return cachedResult
        }

        const { data, request } = await axios.get(args.path)

        const resolveDir = new URL('./', request.responseURL).pathname
        const result: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents: data,
          resolveDir,
        }
        await fileCache.setItem(args.path, result)
        return result
      })
    },
  }
}
