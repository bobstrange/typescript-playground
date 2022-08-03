import { ThemeProvider } from "next-themes"
import { TopBar } from "../components/TopBar"
import "tailwindcss/tailwind.css"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-900 bg-gray-50 w-full min h-screen">
        <TopBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
