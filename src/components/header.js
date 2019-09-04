import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            menuLinks {
              link
              name
            }
          }
        }
      }
    `
  );

  return (
    <div className="header">
      <h1>Craig Charlton</h1>
      <div className="navigation">
        <ul>
          {site.siteMetadata.menuLinks.map(link => (
            <li key={link.name}>
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
