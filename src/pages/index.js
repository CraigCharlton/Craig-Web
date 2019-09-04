import React from 'react';
import Layout from '../components/layout.js';
import Image from '../images/craig.jpg';

export default () => (
  <Layout>
    <ul>
      <li className='page page-home'>
        <img src={Image} alt="me" className='craig-pic' />
      </li>
    </ul>
  </Layout>
);
