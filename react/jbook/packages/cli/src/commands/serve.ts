import { Command } from 'commander'

export const serveCommand = new Command()
  .command('serve')
  .description('opean a file for editing')
  .action(() => {
    console.log('server is running')
  })
