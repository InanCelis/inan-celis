import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import '../assets/styles/home.scss';
import Me from '../assets/images/meee.png';
import { NavLink } from 'react-router-dom';
function Home() {
  useHelperFunction('');
  return (
    <Layout>
      <div className='homepage container'>
        <div className='content'>
          <div className='image'>
            <img src={Me} class="my-image"/>
          </div>
          <div className='details'>
            <h6>Explore My World!</h6>
            <h3>Hi, I'm <span className='textMain font-weight-bold'>Inan Celis</span> a</h3>
            <h1>Website</h1>
            <h2></h2>
            <p class="text-muted mb-4">
              Creative web developer and designer - crafting visually stunning, functional websites. 
              Elevate your brand with bespoke design and innovative technology.
            </p>
            <NavLink className="button-52" >Hire me</NavLink>
          </div>
        </div>
        
      </div>
        
    </Layout>
  );
}

export default Home;