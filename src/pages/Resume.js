import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import Expertise from '../Components/Expertise';
import Work from '../Components/Work';
import Skills from '../Components/Skills';
import PageIndicator from '../Components/Slice/PageIndicator';
import { NavLink } from 'react-router-dom';
function Resume() {
  useHelperFunction('Resume |');

  
  return (
    <Layout>
      <PageIndicator page='Resume'/>
      <div className='pt-5 pb-5'>
          <Expertise />
      </div>
      <div className='pt-5 pb-5'>
          <Skills />
      </div>
      <div className='pt-5 pb-5'>
          <Work />
      </div>
      <div className='d-flex justify-content-center pb-5' data-aos="fade-up">
          <NavLink target={"_blank"} to={`https://drive.google.com/file/d/14vdIg2-MiBwEa6ewC4MpRJG1nBuc9Y2z/view?usp=drive_link`} className="button-50 button" >
              View Full Resume &nbsp;<i className="fa-solid fa-arrow-right text-center"></i>
          </NavLink>
      </div>
    </Layout>
  );
}

export default Resume;
