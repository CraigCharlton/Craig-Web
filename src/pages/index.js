import React from 'react';
import Layout from '../components/layout.js';
import { Link } from 'gatsby';

export default () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
  }

  return (
    <Layout>
      <ul>
        <li className="page page-home" id="home">
          <h1>Craig Charlton</h1>
          <Link to="/#about" className="continue">
            continue
          </Link>
        </li>
        <li className="page page-about" id="about">
          <h2>About</h2>
          <p>I'm Craig!</p>
        </li>
        <li className="page page-projects" id="projects">
          <h2>Projects</h2>
          <Link to="https://github.com/CraigCharlton/Craig-Web">This Site!</Link>
        </li>
        <li className="page page-contact" id="contact">
          <h2>Contact</h2>
          <Link to="https://www.linkedin.com/in/charlton87/">LinkedIn</Link>
        </li>
        <li className="page page-blog" id="blog">
          <h2>Blog</h2>
          <div className="blogs-container">
            here!
          </div>
        </li>
      </ul>
    </Layout>
  );
};
