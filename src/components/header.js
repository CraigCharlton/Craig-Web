import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            menuLinks {
              name
              url
            }
          }
        }
      }
    `
  );

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div className="header">
      <h1>Craig Charlton</h1>
      <div className="navigation">
        <ul>
          {site.siteMetadata.menuLinks.map(link => (
            <li key={link.name}>
              <Link to={`/#${link.url}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
