import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Craig from '../images/craig.jpg';

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

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
  }

  return (
    <div className="navigation">
      <div className="nav-top">
        <img src={Craig} alt="me"/>
      </div>
      <div className="nav-middle">
        <ul>
          {site.siteMetadata.menuLinks.map(link => (
            <li key={link.name}>
              <Link to={`/#${link.url}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>
            {/* social media links added here */}
          </li>
        </ul>
      </div>
    </div>
  );
};
