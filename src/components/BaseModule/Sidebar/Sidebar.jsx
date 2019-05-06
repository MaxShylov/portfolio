import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Sider from 'antd/lib/layout/Sider';
import withRouter from 'react-router-dom/withRouter';

import './Sidebar.scss'
import { ROUTES } from '../../../routes';
import { ReactComponent as IconReact } from '../../../static/images/logos/logo-react.svg'
import { ReactComponent as IconNode } from '../../../static/images/logos/logo-nodejs.svg'

const SubMenu = Menu.SubMenu;


const MENU = [
  { key: 1, path: ROUTES.INDEX },
  { key: 2, path: ROUTES.PORTFOLIO.INDEX },
  { key: 3, path: ROUTES.CONTACTS },
  { key: 4, path: ROUTES.PORTFOLIO.DEEPMED },
  { key: 5, path: ROUTES.PORTFOLIO.SSP },
  { key: 6, path: ROUTES.PORTFOLIO.TODO_LIST_GQL },
  { key: 7, path: ROUTES.PORTFOLIO.BT_DEBTS },
  { key: 8, path: ROUTES.PORTFOLIO.OSCE }
];


class _Sidebar extends Component {

  state = {
    collapsed: false
  };

  componentDidMount() {
    this.toggleMenu();

    this.setCurrentCollapseStatus();

    window.addEventListener('resize', this.setCurrentCollapseStatus, true);
  }

  componentDidUpdate() {
    this.toggleMenu()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setCurrentCollapseStatus, true);
  }

  setCurrentCollapseStatus = () => this.setState({ collapsed: window.innerWidth < 768 });

  toggleMenu = () => {
    const
      { pathname } = window.location,
      menuItem = document.querySelectorAll('.ant-menu-submenu-title')[0],
      isPortfolioIndex = pathname === ROUTES.PORTFOLIO.INDEX;

    menuItem.classList[isPortfolioIndex ? 'add' : 'remove']('ant-menu-item', 'ant-menu-item-selected')
  };

  onCollapse = (collapsed) => this.setState({ collapsed });

  goToPath = (key) => {
    const { path } = MENU.filter(i => i.key === key)[0];

    this.props.history.push(path)
  };

  render() {
    const
      { collapsed } = this.state,
      { pathname } = window.location,
      selectedKey = MENU.filter(i => i.path === pathname)[0].key.toString(),
      openKey = pathname.includes('portfolio') && !collapsed ? 'sub1' : '';

    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        className='Sider'
      >
        <div className="logo">

          <IconReact />
          <IconNode />

        </div>

        <Menu
          selectedKeys={[selectedKey]}
          openKeys={[openKey]}
          mode="inline"
        >

          <Menu.Item key="1" onClick={() => this.goToPath(1)}>
            <Icon type="user" />
            <span>About</span>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <div onClick={() => this.goToPath(2)}>
                <Icon type="shopping" />
                <span>Portfolio</span>
              </div>
            }
          >
            <Menu.Item key="8" onClick={() => this.goToPath(8)}>OSCE Prac</Menu.Item>
            <Menu.Item key="7" onClick={() => this.goToPath(7)}>BT-Debts (telegram bot)</Menu.Item>
            <Menu.Item key="6" onClick={() => this.goToPath(6)}>ToDo List GQL</Menu.Item>
            <Menu.Item key="5" onClick={() => this.goToPath(5)}>SSP</Menu.Item>
            <Menu.Item key="4" onClick={() => this.goToPath(4)}>DeepMed</Menu.Item>
          </SubMenu>


          <Menu.Item key="3" onClick={() => this.goToPath(3)}>
            <Icon type="idcard" />
            <span>Contacts</span>
          </Menu.Item>

        </Menu>
      </Sider>
    );
  }
}


export const Sidebar = withRouter(_Sidebar);
