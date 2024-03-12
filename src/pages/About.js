import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
function About() {
  useHelperFunction('| About');
  return (
    <Layout>
      <h2>About</h2>
    </Layout>
  );
}

export default About;
