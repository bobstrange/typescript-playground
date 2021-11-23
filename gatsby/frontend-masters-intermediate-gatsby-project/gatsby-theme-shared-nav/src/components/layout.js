import * as React from 'react'

import '../styles/variables.css'
import '../styles/global.css'

import { content, footer } from '../styles/layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <main className={content}>{children}</main>
      <footer className={footer}>Built with the shared nav gatsby theme</footer>
    </>
  )
}

export default Layout
