import React, { useEffect, useState }from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import ProjectItem from '../Components/ProjectItem';

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
    
  return (
    <Layout>
      <div className='d-flex justify-content-center py-5 align-items-center'>
        <div>{projItem.company}</div>
      </div>
    </Layout>
  );
}

export default ProjectView;