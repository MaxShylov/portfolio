import React  from 'react';

import { PROJECTS } from '../../../../constans/projects';
import ProjectPage from '../../../../components/ProjectPage/ProjectPage';
import imgBtDebts1 from '../../../../static/images/bt-debts/start.png';
import imgBtDebts2 from '../../../../static/images/bt-debts/todo1.png';
import imgBtDebts3 from '../../../../static/images/bt-debts/todo2.png';
import imgBtDebts4 from '../../../../static/images/bt-debts/del-all.png';
import imgBtDebts5 from '../../../../static/images/bt-debts/get-logs.png';


const
  images = [
    imgBtDebts1,
    imgBtDebts2,
    imgBtDebts3,
    imgBtDebts4,
    imgBtDebts5
  ],
  info = PROJECTS['bt-debts'];


const ProjectBtDebts = () => <ProjectPage images={images} info={info} />;

export default ProjectBtDebts;
