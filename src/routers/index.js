import About from './about/about';
import Portfolio from './portfolio/portfolio';
import ProjectDeepMed from './portfolio/projects/deepmed/projectDeepMed';
import ProjectTodoListGql from './portfolio/projects/todoListGql/projectTodoListGql';
import ProjectBtDebts from './portfolio/projects/btDebts/projectBtDebts';
import ProjectSSP from './portfolio/projects/ssp/projectSSP';
import ProjectOSCE from './portfolio/projects/osce/projectOSCE';
import Contacts from './contacts/contacts';

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
