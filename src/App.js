import React from 'react';

import Layout from 'antd/lib/layout'
import Router from 'react-router-dom/BrowserRouter';

import './App.scss';

import { Sidebar, Header, Footer } from './components/BaseModule';

import Routes from './routes'


const { Content } = Layout;


const App = () => (
  <div className="App">

    <Router>
      <Layout className='main-layout'>

        <Sidebar />

        <Layout>

          <Header />

          <Content className='content-wrap'>

            <div className='content'>

              <Routes />

            </div>

          </Content>

          <Footer />

        </Layout>
      </Layout>
    </Router>
  </div>
);

export default App;
