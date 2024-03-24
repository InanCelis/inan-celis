// import React, useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/project.scss';

import LineClipPath from './Slice/LineClipPath';
import data from '../api/projects.json';
function ProjectItem({itemCount, viewAll, otherItem}) {

    const projects = data.slice(0, itemCount).map((p, index) =>{
        if(index <= 2) {
            return(
                <div className='project container' key={index}>
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
            )
        } 
    });

    const otherProjects = data.slice(3, itemCount).map((p, index) =>{
        return (
            <div class="col-md-6 col-lg-4 col-sm-6 pt-2 pb-2" key={index}>
                <NavLink to={`/project/${p.url}`} className='card-link'>
                    <div class="card bgColor p-3 mb-2 shadow project-card h-100">
                        <div class="d-flex justify-content-between">
                            <div class="badge badge-project"> <span className='text-capitalize'>{p.type}</span> </div>
                            <LineClipPath content={`0${p.id}`} xtraClass={'line-small'}/>
                        </div>
                        <div class="mt-4">
                            <h3>{p.company}</h3>
                            <div class="mt-3"><span class="text-muted">{p.description}</span> </div>
                        </div>
                        <>
                            <NavLink target={"_blank"} to={`${p.url}`} className="link" >
                                <i class="fa-solid fa-chevron-right"></i> <span>View project</span>
                            </NavLink>
                        </>
                    </div>
                </NavLink>
            </div>
        )
    });

  return (
    <>
        {projects}
        {otherItem ?(
            <div className='container pt-5'>
                <h4 className='f-text-m'>Other Projects</h4>
                <div class="row">
                    {otherProjects}
                </div>
            </div>
        ):''}
        
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