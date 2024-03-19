import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
function Project() {
    useHelperFunction('Page Not Found |');
  return (
    <Layout>
      <div className='d-flex justify-content-center hvh-100 align-items-center'>
        <h2>Page not found.</h2>
      </div>
    </Layout>
  );
}

export default Project;