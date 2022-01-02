import 'bulmaswatch/superhero/bulmaswatch.min.css'
import * as esbuild from 'esbuild-wasm'
import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'
import { fetchPlugin } from './plugins/fetch-plugin'
import { CodeEditor } from './components/code-editor'
import { Preview } from './components/preview'

const ESBUILD_WASM_VERSION = '0.8.27'
const App = () => {
  const ref = useRef<any>()
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: `https://unpkg.com/esbuild-wasm@${ESBUILD_WASM_VERSION}/esbuild.wasm`,
    })
    ref.current = service
  }

  const onClick = async () => {
    if (!ref.current) {
      return
    }

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin({ inputCode: input })],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    })
    setCode(result.outputFiles[0].text)
  }

  useEffect(() => {
    startService()
  }, [])

  return (
    <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => {
          setInput(value)
        }}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
