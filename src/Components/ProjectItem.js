import React from 'react';
import '../assets/styles/project.scss';
import AstiLaptop from '../assets/images/project/asti-laptop.png';
import { NavLink } from 'react-router-dom';
function ProjectItem({itemCount, viewMore}) {

    var data = [
        { 
            id: 1,
            company:'Asticom Group of Companies',
            description:'A sleek and professional company website showcasing innovative services, built with WordPress and enhanced using Elementor Pro for dynamic functionality.',
            link:'#',
            image:AstiLaptop,
        },
        { 
            id: 2,
            company:'CHAMPIONS CLUB TEXAS',
            description:'A casino website created with WordPress and Elementor Pro, delivering captivating design and seamless functionality.',
            link:'/about',
            image:AstiLaptop,
        },
        { 
            id: 3,
            company:'Baby Company',
            description:'A polished website crafted from PSD to HTML, featuring seamless transitions and responsive design for optimal user experience and engagement.',
            link:'/about',
            image:AstiLaptop,
        },
    ];
    
    const projects = data.slice(0, itemCount).map((p) =>
        <div className='project container' id='project' key={p.id}>
            <div className='content'>
            <div className={`details ${p.id%2 ===0 ? "order-last": ""}`}>
                <div  className="_index_1cfqm_192"><div className="_divider_ucnqf_2">
                    <div className="_line_ucnqf_8" data-collapsed="false"></div>
                    <div className="_notch_ucnqf_30" data-collapsed="false" ></div>
                    </div><span className="_indexNumber_1cfqm_201">{`0${p.id}`}</span>
                </div>
                <h3 className='title-4 m-0 pb-2'>{p.company}</h3>
                
                <p className="text-muted mb-4 mb-md-5 f-text-m">
                    {p.description}
                </p>
                <NavLink to={p.link} className="button-52 button" >View project &nbsp;<i className="fa-solid fa-arrow-right"></i></NavLink>
            </div>
            <div className='image'>
                <img src={p.image} className="my-image" alt={p.company}/>
            </div>
            </div>
        </div> 
    );

  return (
    <>
      {projects}
      { viewMore ?(
        <div className='d-flex justify-content-center pb-5'>
            <NavLink to='#' className="button-50 button" >
                View more projects &nbsp;<i className="fa-solid fa-arrow-right text-center"></i>
            </NavLink>
        </div>
        ) : ''}
    </>
  );
}

export default ProjectItem;