import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle  
} from "./Layout.module.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `);

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>

      <nav>
        <ul className={navLinks}>

          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>

          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About</Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/blogs" className={navLinkText}>
              Blog
            </Link>
          </li>

        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout