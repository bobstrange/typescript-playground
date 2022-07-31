import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  const customTheme = extendTheme({
    colors: {
      brand: {
        100: "#ffebee",
        200: "#e57373",
        300: "#f44336",
        400: "#e53935",
      },
    },
  })

  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
