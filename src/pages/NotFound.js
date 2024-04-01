import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import RainbowSwirl from '../Components/RainbowSwirl';
import { NavLink } from "react-router-dom";
function Project() {
    useHelperFunction('Page Not Found |');
  return (
    <Layout>
      <RainbowSwirl position={'fixed'}/>
      <div className='container text-center hvh-80 align-items-center not-found'>
        <h1 className='pb-2'>404</h1>
        <h2 className='pb-1'>This Page Must Have Taken a Coffee Break.</h2>
        <p className="f-text-m text-muted">Like a good code, you’ve discovered something that's currently not here. Maybe it's refining its skills or learning a new language. Let's navigate back to where all successful projects are displayed.🌴</p>
        <NavLink to={`/`} className="link" >
        <i class="fa-solid fa-chevron-right"></i> <span>Back to homepage</span>
        </NavLink>
      </div>
    </Layout>
  );
}

export default Project;