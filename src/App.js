import React, { Component } from 'react';
import Layout from 'antd/lib/layout'
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';

import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import routes from './routers'


const { Content } = Layout;


class App extends Component {

  render() {
    return (
      <div className="App">

        <Router>
          <Layout className='main-layout'>

            <Sidebar />

            <Layout>

              <Header />

              <Content className='content-wrap'>

                <div className='content'>

                  <Switch>
                    {routes.map((route, i) => (
                      <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        component={data => (
                          !route.redirect
                            ? <route.component {...data} />
                            : <Redirect to={{ pathname: route.redirect }} />
                        )}
                      />
                    ))}
                  </Switch>

                </div>

              </Content>

              <Footer />

            </Layout>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
