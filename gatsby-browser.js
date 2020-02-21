import React from 'react';
import Layout from './src/components/layout.js';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
