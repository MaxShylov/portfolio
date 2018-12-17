import React  from 'react';

import PageProject from '../../../../components/PageProject/PageProject';
import imgSSP1 from '../../../../static/images/ssp/login.jpg';
import { PROJECTS } from '../../../../constans/projects';


const
  images = [imgSSP1],
  info = PROJECTS.ssp;


const ProjectSSP = () => <PageProject images={images} info={info} />;


export default ProjectSSP;
