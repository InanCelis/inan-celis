import React from 'react';
import '../assets/styles/project.scss';
import AstiLaptop from '../assets/images/project/asti-laptop.png';
import { NavLink } from 'react-router-dom';
function ProjectItem({itemCount}) {

    var data = [
        { 
            id: 1,
            number: '01', 
            company:'Asticom Group of Companies',
            description:'Building website for company branding using WordPress Elementor Pro',
            link:'#',
            image:AstiLaptop,
            extraClass: null,
        },
        { 
            id: 2,
            number: '02', 
            company:'Asticom Group of Companies',
            description:'Building website for company branding using WordPress Elementor Pro',
            link:'/about',
            image:AstiLaptop,
            extraClass: 'order-last',
        },
    ];
    
    const projects = data.slice(0, itemCount).map((p) =>
        <div className='project container' id='project'>
            <div className='content'>
            <div className={`details ${p.extraClass}`}>
                <div  class="_index_1cfqm_192"><div class="_divider_ucnqf_2">
                    <div class="_line_ucnqf_8" data-collapsed="false"></div>
                    <div class="_notch_ucnqf_30" data-collapsed="false" ></div>
                    </div><span class="_indexNumber_1cfqm_201">{p.number}</span>
                </div>
                <h3 className='title-4 m-0 pb-2'>{p.company}</h3>
                
                <p class="text-muted mb-4 mb-md-5 f-text-m">
                    {p.description}
                </p>
                <NavLink to={p.link} className="button-52" >View project &nbsp;<i class="fa-solid fa-arrow-right"></i></NavLink>
            </div>
            <div className='image'>
                <img src={p.image} class="my-image"/>
            </div>
            </div>
        </div> 
    );

  return (
    <>
      {projects}
    </>
  );
}

export default ProjectItem;