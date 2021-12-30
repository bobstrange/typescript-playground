import MonacoEditor, { OnMount } from '@monaco-editor/react'

type CodeEditorProps = {
  initialValue: string
  onChange: (value: string) => void
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  initialValue,
  onChange,
}) => {
  const onMount: OnMount = (editor, monaco) => {
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue())
    })
  }
  return (
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
  )
}
