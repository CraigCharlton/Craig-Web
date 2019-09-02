import React from 'react';
import Layout from '../components/layout.js';
import Image from '../images/craig.jpg';

export default () => (
  <Layout>
    <h1>Craig Charlton</h1>
    <img src={Image} alt="me" width="50rem" />
  </Layout>
);
