import React  from 'react';

import { PROJECTS } from '../../../../constans/projects';
import ProjectPage from '../../../../components/ProjectPage/ProjectPage';
import imgToDoList1 from '../../../../static/images/todo-list-gql/login.jpg';
import imgToDoList2 from '../../../../static/images/todo-list-gql/todo.jpg';


const
  images = [
    imgToDoList1,
    imgToDoList2
  ],
  info = PROJECTS['todo-list-gql'];


const ProjectTodoListGql = () => <ProjectPage images={images} info={info} />


export default ProjectTodoListGql;
