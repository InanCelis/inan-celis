import React, { useEffect, useState }from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import '../assets/styles/project.scss';

import project from '../api/projects.json';
function ProjectView() {
    const [projItem, setProjItem] = useState([]);
    let data = project;
    useEffect(() => {
        let str = window.location.href;
        str = str.split("/");
        let obj = data.filter(item => item.url === str[str.length - 1]);
        // console.log(obj[0])
        setProjItem(obj[0]) 
        document.title = `${projItem.company} | Inan The Future`;
    },[projItem]);
    useHelperFunction('nothing');

  return (
    <Layout>
      <>
        <div className='project-item-bg' style={{backgroundImage: `url('project/${projItem.imageBg}')`}}></div>
        <div className='project-item-content container'>
          <div className='details'>
            <h1 className='title-3'>{projItem.company}</h1>
            <p className='text-muted f-text-m'>{projItem.responsibilities}</p>
            { projItem.website ?(
              <NavLink target={"_blank"} to={`${projItem.website}`} className="link" >
                <i class="fa-solid fa-chevron-right"></i> <span>Visit website</span>
              </NavLink>
            ) : ''}
          </div>
          <div className='tools'>
            {projItem.tools?.map(tool => (  
              <div>  
                {tool}  
              </div>  
            ))}  
          </div>
        </div>
      </>
      
    </Layout>
  );
}

export default ProjectView;