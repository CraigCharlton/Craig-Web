import React, { Component } from 'react';
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
    <div>
      <h1>Craig Charlton</h1>
      <ul>
        {site.siteMetadata.menuLinks.map(link => (
          <li key={link.name}>
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
