import React  from 'react';

import ProjectPage from '../../../../components/ProjectPage/ProjectPage';
import imgSSP1 from '../../../../static/images/ssp/login.jpg';
import { PROJECTS } from '../../../../constans/projects';


const
  images = [imgSSP1],
  info = PROJECTS.ssp;


const ProjectSSP = () => <ProjectPage images={images} info={info} />;


export default ProjectSSP;
