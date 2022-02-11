import MonacoEditor, { OnMount } from '@monaco-editor/react'

import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

import Highlighter from 'monaco-jsx-highlighter'

import { useRef } from 'react'

import './code-editor.css'

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

    const highlighter = new Highlighter(
      // @ts-ignore
      monaco,
      parse,
      traverse,
      editor
    )
    highlighter.highLightOnDidChangeModelContent(
      100,
      () => {},
      () => {},
      undefined,
      () => {}
    )
  }

  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue()
    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: false,
        singleQuote: true,
      })
      .replace(/\n$/, '')
    editorRef.current.setValue(formatted)
  }

  return (
    <div className="editor-wrapper">
      <button
        onClick={onFormatClick}
        className="button button-format is-primary is-small"
      >
        Format
      </button>
      <MonacoEditor
        onMount={onMount}
        value={initialValue}
        height="100%"
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
