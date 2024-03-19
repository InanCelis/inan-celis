import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/project.scss';

import LineClipPath from './Slice/LineClipPath';
import data from '../api/projects.json';
function ProjectItem({itemCount, viewAll}) {
    const projects = data.slice(0, itemCount).map((p) =>
        <div className='project container' key={p.id}>
            <div className='content'>
            <div className={`details ${p.id%2 ===0 ? "order-last": ""}`}>
                <LineClipPath content={`0${p.id}`}/>
                <h3 className='title-4 m-0 pb-2'>{p.company}</h3>
                <p className="text-muted mb-4 mb-md-5 f-text-m">
                    {p.description}
                </p>
                <NavLink to={`/project/${p.url}`} className="button-52 button" >View project &nbsp;<i className="fa-solid fa-arrow-right"></i></NavLink>
            </div>
            <div className='image'>
                <img src={require(`../assets/images/project/${p.image}`)}  className="my-image" alt={p.company}/>
            </div>
            </div>
        </div> 
    );

  return (
    <>
      {projects}
      { viewAll ?(
        <div className='d-flex justify-content-center pb-5'>
            <NavLink to='/project' className="button-50 button" >
                View all projects &nbsp;<i className="fa-solid fa-arrow-right text-center"></i>
            </NavLink>
        </div>
        ) : ''}
    </>
  );
}

export default ProjectItem;