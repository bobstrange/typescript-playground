/** @jsxRuntime classic */
/** @jsx jsx */

import { AppProps } from 'next/app'
import { jsx, ThemeProvider } from 'theme-ui'

import { theme } from '../theme'
import { Navigation } from '../components/Navigation'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
