import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, sharedNav, link } from '../styles/nav.module.css'

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navItems {
            label
            path
          }
        }
      }
    }
  `)

  const siteMetadata = data.site.siteMetadata
  const navItems = siteMetadata.navItems

  return (
    <>
      <header className={container}>
        <Link to="/" className={link}>
          {siteMetadata.title}
        </Link>
        <nav className={sharedNav}>
          {navItems.map((navItem) => (
            <Link to={navItem.path} key={navItem.label} className={link}>
              {navItem.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  )
}
