import React from 'react';
import './App.css';
import { Col, Layout, Menu, Row, Space, Typography } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import {
  CenterContent,
  CONTENT_PADDING,
  Contents,
  FixedHeader,
  StyledFooter,
} from './components/styled';
import { GithubIcon } from './components/styled/icon';
import Solutions from './pages/Solutions';
import { ROUTEPATH } from './types';

function App() {
  return (
    <Layout className="layout">
      <FixedHeader>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              key: 'home',
              label: 'Home',
            },
          ]}
        />
      </FixedHeader>
      <CenterContent style={{ padding: `${CONTENT_PADDING}px 50px` }}>
        <div className="site-layout-content">
          <Contents>
            <Row>
              <Col span={24}>
                <Routes>
                  <Route path={ROUTEPATH.HOME} element={<Home />} />
                  <Route
                    path={`${ROUTEPATH.SOLUTIONS}/:number`}
                    element={<Solutions />}
                  />
                </Routes>
              </Col>
            </Row>
          </Contents>
        </div>
      </CenterContent>
      <StyledFooter style={{ textAlign: 'center' }}>
        <Space size="middle" direction="vertical">
          <div>
            Tech-Interview-solutions ©2023 Created by
            <Typography.Text strong>JJongTaeng</Typography.Text>
          </div>
          <div>
            <a
              href="https://github.com/jjongtaeng"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </Space>
      </StyledFooter>
    </Layout>
  );
}

export default App;
