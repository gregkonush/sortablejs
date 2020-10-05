import React from 'react';
import styles from './index.css';
import { Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <Layout className={styles.main}>
      <Header className={styles.header}></Header>
      <Layout>
        <Sider className={styles.sider}>
          <Menu className={styles.menu} defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              Your Votes
            </Menu.Item>
            <Menu.Item key="2">
              Results
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className={styles.content}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
