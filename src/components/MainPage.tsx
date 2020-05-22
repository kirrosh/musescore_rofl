import React from "react";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import styled from "styled-components/macro";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import MainContent from "./MainContent";

import { ReactComponent as LogoIcon } from "../svg/Logo.svg";
import LinkButton from "../common/LinkButton";
const { Header, Content } = Layout;

const MainPage = () => {
  return (
    <Layout className="layout">
      <StyledHeader>
        <LogoIcon width={137} height={50} />
        <NavigationMenu>
          <LinkButton>Classes</LinkButton>
          <LinkButton active>Assignments</LinkButton>
          <LinkButton>Library</LinkButton>
        </NavigationMenu>
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

const StyledHeader = styled(Header)`
  align-items: center;
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

const NavigationMenu = styled.div`
  display: grid;
  grid-gap: 55px;
  grid-template-columns: repeat(3, auto);
  align-items: center;
`;

export default MainPage;
