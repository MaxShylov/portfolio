import React  from 'react';

import Layout from 'antd/lib/layout'
import Router from 'react-router-dom/BrowserRouter';

import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Routers from './routers'


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

              <Routers />

            </div>

          </Content>

          <Footer />

        </Layout>
      </Layout>
    </Router>
  </div>
);

export default App;
