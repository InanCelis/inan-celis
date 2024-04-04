import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import Work from '../Components/Work';
import PageIndicator from '../Components/Slice/PageIndicator';
function Resume() {
  useHelperFunction('Resume |');

  
  return (
    <Layout>
      <PageIndicator page='Resume'/>
      <div className='pt-5'>
          <Work />
      </div>
    </Layout>
  );
}

export default Resume;
