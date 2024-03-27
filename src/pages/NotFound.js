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
        <h2 className='pb-1'>Page not found.</h2>
        <p className="f-text-m text-muted">This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you.</p>
        <NavLink target={"_blank"} to={`/`} className="link" >
        <i class="fa-solid fa-chevron-right"></i> <span>Back to homepage</span>
        </NavLink>
      </div>
    </Layout>
  );
}

export default Project;