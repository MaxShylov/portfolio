import React  from 'react';

import PageProject from '../../../../components/PageProject/PageProject';

import imgOSCE1 from '../../../../static/images/osce/new_message.jpg';
import imgOSCE2 from '../../../../static/images/osce/call.jpg';
import imgOSCE3 from '../../../../static/images/osce/registration.jpg';
import { PROJECTS } from '../../../../constans/projects';


const
  images = [
    imgOSCE1,
    imgOSCE2,
    imgOSCE3
  ],
  info = PROJECTS.osce;


const ProjectOSCE = () => <PageProject images={images} info={info} />;


export default ProjectOSCE;
