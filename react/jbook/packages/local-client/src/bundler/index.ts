import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'
import { fetchPlugin } from './plugins/fetch-plugin'

const ESBUILD_WASM_VERSION = '0.8.27'

let service: esbuild.Service

export const bundle = async (
  rawCode: string
): Promise<{ code: string; error: string }> => {
  if (!service) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: `https://unpkg.com/esbuild-wasm@${ESBUILD_WASM_VERSION}/esbuild.wasm`,
    })
  }
  try {
    const result = await service.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin({ inputCode: rawCode })],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
      jsxFactory: '_React.createElement',
      jsxFragment: '_React.Fragment',
    })
    return {
      code: result.outputFiles[0].text,
      error: '',
    }
  } catch (e) {
    console.log(e)
    return { code: '', error: (e as Error).message }
  }
}
