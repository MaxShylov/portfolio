import React  from 'react';

import { PROJECTS } from '../../../../constans/projects';
import PageProject from '../../../../components/PortfolioModule/PageProject/PageProject';
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


const ProjectBtDebts = () => <PageProject images={images} info={info} />;

export default ProjectBtDebts;
