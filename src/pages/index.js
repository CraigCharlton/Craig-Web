import React from 'react';
import Layout from '../components/layout.js';
import Image from '../images/craig.jpg';

export default () => {
  return (
    <Layout>
      <ul>
        <li className='page page-home' id="home">
          <img src={Image} alt="me" className='craig-pic' />
        </li>
        <li className='page page-about' id="about">
          <h2>About</h2>
        </li>
        <li className='page page-contact' id="contact">
          <h2>Contact</h2>
        </li>
      </ul>
    </Layout>
  )
};
