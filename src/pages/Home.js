import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import '../assets/styles/home.scss';
function Home() {
  useHelperFunction('');
  return (
    <Layout>
      <div className='homePage'>
        <div className="text-container">
          <h1>INAN CELIS</h1>
        </div>
      </div>
        
    </Layout>
  );
}

export default Home;