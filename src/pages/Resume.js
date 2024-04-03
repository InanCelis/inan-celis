import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import Work from '../Components/Work';
function Resume() {
  useHelperFunction('Resume |');

  
  return (
    <Layout>
      <div className='pt-5'>
          <Work />
      </div>
    </Layout>
  );
}

export default Resume;
