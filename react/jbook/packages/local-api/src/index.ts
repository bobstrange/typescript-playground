export const serve = ({
  port,
  filename,
  dir,
}: {
  port: number
  filename: string
  dir: string
}) => {
  console.log('port: ', port)
  console.log('filename: ', filename)
  console.log('dir: ', dir)
}
