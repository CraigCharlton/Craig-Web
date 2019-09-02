import React from 'react';
import Header from '../components/header.js';

export default ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
)
