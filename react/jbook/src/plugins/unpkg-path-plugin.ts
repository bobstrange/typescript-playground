import * as esbuild from 'esbuild-wasm'
import axios from 'axios'
import localForage from 'localforage'

const fileCache = localForage.createInstance({
  name: 'filecache',
})

export const unpkgPathPlugin = (inputCode: string) => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      // Handle root entry file of 'index.js'
      build.onResolve({ filter: /^index\.js$/ }, () => {
        return { path: 'index.js', namespace: 'a' }
      })

      // Handle relative paths in a module
      build.onResolve({ filter: /^\.+\// }, (args: esbuild.OnResolveArgs) => {
        return {
          path: new URL(args.path, 'https://unpkg.com' + args.resolveDir + '/')
            .href,
          namespace: 'a',
        }
      })

      // Handle main file of a module
      build.onResolve({ filter: /.*/ }, async (args: esbuild.OnResolveArgs) => {
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
            contents: inputCode,
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
