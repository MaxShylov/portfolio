import React from 'react';

import PageProject from '../../../../components/PortfolioModule/PageProject/PageProject';
import imgDeepMed1 from '../../../../static/images/deepmed/prostate-cancer_global-statistics.jpg';
import imgDeepMed2 from '../../../../static/images/deepmed/login.jpg';
import imgDeepMed3 from '../../../../static/images/deepmed/main.jpg';
import imgDeepMed4 from '../../../../static/images/deepmed/prostate-cancer_diagnosis.jpg';
import imgDeepMed5 from '../../../../static/images/deepmed/prostate-cancer_similar-diagnoses.jpg';
import { PROJECTS } from '../../../../constans/projects';


const
  images = [
    imgDeepMed1,
    imgDeepMed2,
    imgDeepMed3,
    imgDeepMed4,
    imgDeepMed5
  ],
  info = PROJECTS.deepmed;


const ProjectDeepMed = () => <PageProject images={images} info={info} />;


export default ProjectDeepMed;
