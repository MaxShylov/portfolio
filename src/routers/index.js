import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import ProjectDeepMed from './portfolio/projects/deepmed/ProjectDeepMed';
import ProjectTodoListGql from './portfolio/projects/todoListGql/ProjectTodoListGql';
import ProjectBtDebts from './portfolio/projects/btDebts/ProjectBtDebts';
import ProjectSSP from './portfolio/projects/ssp/ProjectSSP';
import ProjectOSCE from './portfolio/projects/osce/ProjectOSCE';
import Contacts from './contacts/Contacts';

export const ROUTERS = {
  INDEX: '/',
  PORTFOLIO: {
    INDEX: '/portfolio',
    DEEPMED: '/portfolio/deepmed',
    SSP: '/portfolio/ssp',
    TODO_LIST_GQL: '/portfolio/todo-list-gql',
    BT_DEBTS: '/portfolio/bt-debts',
    OSCE: '/portfolio/osce'
  },
  CONTACTS: '/contacts'

};

const routes = [
  {
    path: ROUTERS.INDEX,
    exact: true,
    component: About
  },
  {
    path: ROUTERS.PORTFOLIO.INDEX,
    exact: true,
    component: Portfolio
  },
  {
    path: ROUTERS.PORTFOLIO.DEEPMED,
    component: ProjectDeepMed
  },
  {
    path: ROUTERS.PORTFOLIO.SSP,
    component: ProjectSSP
  },
  {
    path: ROUTERS.PORTFOLIO.TODO_LIST_GQL,
    component: ProjectTodoListGql
  },
  {
    path: ROUTERS.PORTFOLIO.BT_DEBTS,
    component: ProjectBtDebts
  },
  {
    path: ROUTERS.PORTFOLIO.OSCE,
    component: ProjectOSCE
  },
  {
    path: ROUTERS.CONTACTS,
    exact: true,
    component: Contacts
  },
  {
    path: '*',
    redirect: ROUTERS.INDEX
  }
];

export default routes;
