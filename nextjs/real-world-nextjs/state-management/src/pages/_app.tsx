import Head from "next/head"
import type { AppProps } from "next/app"
import Navbar from "../components/NavBar"
import { CartContext } from "../context/CartContext"
import { useState } from "react"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [items, setItems] = useState({})

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <CartContext.Provider value={{ items, setItems }}>
        <Navbar />
        <div className="w-9/12 m-auto pt-10">
          <Component {...pageProps} />
        </div>
      </CartContext.Provider>
    </>
  )
}

export default MyApp
