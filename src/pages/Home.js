import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import '../assets/styles/home.scss';
import Me from '../assets/images/me.png';
function Home() {
  useHelperFunction('');
  return (
    <Layout>
      {/* <div className='homePage'>
        <div className="text-container">
          <h1>INAN CELIS</h1>
        </div>
      </div> */}

      {/* <div class="row container">
        <div class="col-lg-6 offset-lg-1">
          <img src={Me} class="my-image"/>
        </div>
        <div class="col-lg-5 banner-text">
          <h1>Website</h1>
          <h2>Developer</h2>
          <p class="text-muted">
            A WEBSITE AND FRONT-END DEVELOPER WHO LOVES DESIGNING WEBSITES AND MAKING THE COMPLEX PROBLEM INTO SIMPLE.
          </p>
        </div>
      </div> */}

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
            <p class="text-muted">
              Creative web developer and designer - crafting visually stunning, functional websites. 
              Elevate your brand with bespoke design and innovative technology.
            </p>
          </div>
        </div>
      </div>
        
    </Layout>
  );
}

export default Home;