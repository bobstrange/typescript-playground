import * as React from 'react'

import '../styles/variables.css'
import '../styles/global.css'
import { Nav } from './nav.js'

import { content, footer } from '../styles/layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={content}>{children}</main>
      <footer className={footer}>Built with the shared nav gatsby theme</footer>
    </>
  )
}

export default Layout
