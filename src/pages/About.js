import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import Details from '../Components/Details';
function About() {
  useHelperFunction('Details |');

  
  return (
    <Layout>
      <div className='container pt-5'>
        <div className="text-container">
          <Details />
        </div>
      </div>
    </Layout>
  );
}

export default About;
