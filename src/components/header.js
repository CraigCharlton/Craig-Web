import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Craig from '../images/craig.jpg';

export default () => {
  const { allLinksJson } = useStaticQuery(
    graphql`
      query LinksQuery {
        allLinksJson {
          edges {
            node {
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
          {allLinksJson.edges.map(link => (
            <li key={link.node.name}>
              <Link to={`/#${link.node.url}`}>{link.node.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>
            {/* social media links added here */}
            Craig Charlton &copy;
          </li>
        </ul>
      </div>
    </div>
  );
};
