import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

const SideNavigation = () => (
  <Sidebar as={Menu} width="thin" visible icon="labeled" vertical inverted>
    <Menu.Item name="home">
      <Link to="/admin/dashboard">
        {' '}
        <Icon name="home" /> Dashboard
      </Link>
    </Menu.Item>
    <Menu.Item name="game">
      <Link to="/admin/dashboard/superadmintest">
        {' '}
        <Icon name="game" /> SuperAdmin
      </Link>

    </Menu.Item>
    <Menu.Item name="game">
      <Link to="/admin/dashboard/customdashboard">
        {' '}
        <Icon name="game" /> CustomDashboard
      </Link>

    </Menu.Item>
    <Menu.Item name="game">
      <Link to="/admin/dashboard/role">
        {' '}
        <Icon name="game" /> Role
      </Link>
    </Menu.Item>
    <Menu.Item name='users'>
      <Icon name='users' />
      <Link to='/admin/dashboard/blog-category'>Blog Category</Link>
    </Menu.Item>
  </Sidebar>
);

export default SideNavigation;
