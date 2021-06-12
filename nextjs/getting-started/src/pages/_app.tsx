import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'

import { theme } from '../theme'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
