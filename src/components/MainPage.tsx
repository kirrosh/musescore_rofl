import React from "react";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import styled from "styled-components/macro";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import MainContent from "./MainContent";

const { Header, Content } = Layout;
const MainPage = () => {
  return (
    <Layout className="layout">
      <StyledHeader>
        <Logo />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Classes</Menu.Item>
          <Menu.Item key="2">Assignments</Menu.Item>
          <Menu.Item key="3">Library</Menu.Item>
        </Menu>
        <AccountAndSearch>
          <SearchIcon />
          <Avatar size={40} icon={<UserOutlined />} />
        </AccountAndSearch>
      </StyledHeader>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <Breadcrumb style={{ margin: "16px 0" }} separator=">">
          <Breadcrumb.Item>Assignments</Breadcrumb.Item>
          <Breadcrumb.Item>
            Wind Ensemble - Opener: Set 1-15 (w/mark time)
          </Breadcrumb.Item>
        </Breadcrumb>
        <MainContent />
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

const Logo = styled.div`
  background: url(https://musescore.com/static/public/build/musescore/202005/logoWhite.16662720.png)
    no-repeat 50%;
  padding: 5px;
  width: 150px;
  background-size: contain;
  width: 100px;
`;

const StyledHeader = styled(Header)`
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
  justify-content: space-between;
`;

const SearchIcon = styled(SearchOutlined)`
  margin-right: 24px;
  & svg {
    width: 16px;
    height: 16px;
    color: white;
  }
`;

const AccountAndSearch = styled.div`
  display: flex;
  align-items: center;
`;
export default MainPage;
