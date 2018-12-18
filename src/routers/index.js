import React, { lazy, Suspense } from 'react'

import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';

const About = lazy(() => import('./about/about'));
const Portfolio = lazy(() => import( './portfolio/portfolio'));
const ProjectDeepMed = lazy(() => import(  './portfolio/projects/deepmed/projectDeepMed'));
const ProjectTodoListGql = lazy(() => import(  './portfolio/projects/todoListGql/projectTodoListGql'));
const ProjectBtDebts = lazy(() => import(  './portfolio/projects/btDebts/projectBtDebts'));
const ProjectSSP = lazy(() => import(  './portfolio/projects/ssp/projectSSP'));
const ProjectOSCE = lazy(() => import(  './portfolio/projects/osce/projectOSCE'));
const Contacts = lazy(() => import(  './contacts/contacts'));


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

const Routers = () => (
  <Switch>

    {routes.map((route, i) => (
      <Route
        key={i}
        path={process.env.PUBLIC_URL + route.path}
        exact={route.exact}
        component={data => (
          route.redirect
            ? <Redirect to={{ pathname: route.redirect }} />
            : (
              <Suspense fallback={null}>
                <route.component {...data} />
              </Suspense>
            )
        )}
      />
    ))}
  </Switch>
);

export default Routers;
