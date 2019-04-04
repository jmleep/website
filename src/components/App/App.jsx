import React from 'react';
import { Row, Col, Menu } from 'antd';
import 'antd/dist/antd.css';
import styles from './App.css';

document.body.style.margin = 0;

const App = () => (
  <div className={styles.app}>
    <Row type="flex" justify="center" align="top">
      <Col span={3} offset={5}>
        <h1>Jordan Leeper</h1>
      </Col>
      <Col span={5} />
    </Row>
    <Row ype="flex" justify="center">
      <Menu mode="horizontal">
        <Menu.Item>Education</Menu.Item>
        <Menu.Item>Experience</Menu.Item>
        <Menu.Item>Projects</Menu.Item>
      </Menu>
    </Row>
    <br />
  </div>
);

export default App;
