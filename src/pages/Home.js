import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import '../assets/styles/home.scss';
import Me from '../assets/images/meee.png';
import ProjectItem from '../Components/ProjectItem';
function Home() {
  useHelperFunction('');
  return (
    <Layout>
      <div className='container'>
        <div className='homepage'>
          <div className='content'>
            <div className='image'>
              <img src={Me} className="my-image"/>
            </div>
            <div className='details'>
              <h6>Explore My World!</h6>
              <h3>Hi, I'm <span className='textMain font-weight-bold'>Inan Celis</span> a</h3>
              <h1>Website</h1>
              <h2></h2>
              <p className="text-muted mb-4">
                Creative web developer and designer - crafting visually stunning, functional websites. 
                Elevate your brand with bespoke design and innovative technology.
              </p>
              {/* <NavLink className="button-52" >Hire me</NavLink> */}
              
            </div>
          </div>
        </div>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
      
      <ProjectItem itemCount={3} viewMore={true} />
      
    </Layout>
  );
}

export default Home;