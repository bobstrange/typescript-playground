import { Command } from 'commander'
import { serve } from 'local-api'

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('opean a file for editing')
  .option('-p, --port <nunmber>', 'port number', '8080')
  .action((filename = 'notebook.js', options: { port: string }) => {
    console.log(filename, options)

    const port = parseInt(options.port)
    serve({ port, filename, dir: '/' })
  })
