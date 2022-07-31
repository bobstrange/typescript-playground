import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { TopBar } from "../components/TopBar"

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
      <TopBar />
      <Box maxWidth="container.xl" margin="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
