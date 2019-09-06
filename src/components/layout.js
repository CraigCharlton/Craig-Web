import React from 'react';
import Header from '../components/header.js';
import '../components/style.css';

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="main">{children}</div>
  </React.Fragment>
);
