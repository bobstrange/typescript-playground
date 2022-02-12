import path from 'path'
import { Command } from 'commander'
import { serve } from 'local-api'

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('opean a file for editing')
  .option('-p, --port <nunmber>', 'port number', '8080')
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename))

      const port = parseInt(options.port)
      await serve({ port, filename: path.basename(filename), dir })
    } catch (error) {
      console.error(error)
    }
  })
