import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
function Home() {
  useHelperFunction('');
  return (
    <Layout>
      <div className='container pt-5'>
        <div class="text-container">
          <h1>INAN CELIS</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Home;