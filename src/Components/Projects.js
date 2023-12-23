import React from 'react';
import ProjectBox from './ProjectBox';
import UniHubImage from '../images/uniHub.png';
import VisualFlowImage from '../images/visualFlow.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={VisualFlowImage} projectName="VisualFlow" />
        <ProjectBox projectPhoto={UniHubImage} projectName="UniHub" />
      </div>

    </div>
  )
}

export default Projects