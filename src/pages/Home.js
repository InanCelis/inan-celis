import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
function Home() {
  useHelperFunction('');
  return (
    <Layout>
      <h2>Home</h2>
    </Layout>
  );
}

export default Home;