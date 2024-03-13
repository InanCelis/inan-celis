import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
function About() {
  useHelperFunction('| About');

  
  return (
    <Layout>
      <div className='container pt-5'>
        <div class="text-container">
          <h1>Details</h1>
        </div>
      </div>

      {/* <canvas className='connecting-dots'></canvas> */}
    </Layout>
  );
}

export default About;
