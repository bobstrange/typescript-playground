import MonacoEditor, { OnMount } from '@monaco-editor/react'

import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import { useRef } from 'react'

type CodeEditorProps = {
  initialValue: string
  onChange: (value: string) => void
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  initialValue,
  onChange,
}) => {
  const editorRef = useRef<any>()
  const onMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue())
    })

    editor.getModel()?.updateOptions({ tabSize: 2 })
  }

  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue()
    const formatted = prettier.format(unformatted, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: false,
      singleQuote: true,
    })
    editorRef.current.setValue(formatted)
  }

  return (
    <div>
      <button onClick={onFormatClick}>Format</button>
      <MonacoEditor
        onMount={onMount}
        value={initialValue}
        height={500}
        language="javascript"
        theme="vs-dark"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  )
}
