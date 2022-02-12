import { Command } from 'commander'

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('opean a file for editing')
  .option('-p, --port <nunmber>', 'port number', '8080')
  .action((filename = 'notebook.js', options) => {
    console.log(filename, options)
  })
