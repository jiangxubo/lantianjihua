import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
// import './style.scss'
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Index = () => {

  const items = [
    getItem('后台管理', 'sub1', <MailOutlined />, [
      getItem('首页图片', '9'),
      getItem('商品管理', '10'),
      getItem('用户管理', '11'),
      // getItem('', '12'),
    ]),
  ];

  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
    <Menu
      onClick={onClick}
      style={{
        width: 200,
        marginTop:64,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      theme='dark'
    />
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
        }}
      />
      <Content style={{ margin: '10px 10px 0',}}>
            123
      </Content>
    </Layout>
  </Layout>
  );
}

export default Index;
